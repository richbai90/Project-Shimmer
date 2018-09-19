import React, { ReactNode, ReactElement } from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext, AnyPageProps, WebclientDocumentProps } from 'next/document';
import flush from 'styled-jsx/server';
import Error from 'next/error';
import { ApplicationDocumentContext } from 'next';
import { Request, Response } from 'express';
import getPageContext from 'src/mui/getPageContext';

declare module 'next' {
  interface ExpressContext {
    req?: Request;
    res?: Response;
  }

  export type ApplicationDocumentContext = ApplicationContext & NextDocumentContext

  export type ApplicationContext = Omit<NextContext, 'req'|'res'> & ExpressContext
  
}

declare module 'next/document' {
  interface MuiDocumentProps {
    styles?: ReactElement<any>[]|JSX.Element
  }

  export type WebclientDocumentProps = Omit<DocumentProps, 'styles'> & MuiDocumentProps
}

class MyDocument extends Document {

  static getInitialProps(ctx : ApplicationDocumentContext ) : WebclientDocumentProps {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
  
    // Render app and page and get the context of the page with collected side effects.
    let pageContext = getPageContext(); // this is going to be passed from the app page, but to be certain we'll declare it here explicitely
    const page = ctx.renderPage(Component => {
      const WrappedComponent = (props : (AnyPageProps & {children? : ReactNode}) ) => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };
      return WrappedComponent;
    });
    let nonce = '';
    let statusCode = 200;
    if(ctx.res) {
      nonce = ctx.res.locals.nonce!;
      statusCode = ctx.res.statusCode;
    }
  
    return {
      statusCode,
      ...page,
      pageContext,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          <style
            nonce={nonce}
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: (pageContext!).sheetsRegistry.toString() }}
          />
          {flush() || null}
        </>
      ),
      nonce,
    };
  };

  render() {
    const { pageContext, nonce, statusCode } = this.props;
    if (statusCode > 200) return <Error statusCode={this.props.statusCode} />;
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>My page</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, '
              + 'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <meta property="csp-nonce" content={nonce} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </html>
    );
  }
}

export default MyDocument;
