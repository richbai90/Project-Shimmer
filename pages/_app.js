import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Fragment } from 'react';
import { merge } from 'lodash';

import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import Spacer from '../components/Spacer';
import AppBar from '../components/AppBar';
import getPageContext from '../src/getPageContext';
import configureStore from '../redux';

TouchRipple.prototype.render = () => null; // Disables TouchRipple throughout

class Webclient extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  static async getInitialProps({ Component, ctx }) {
    const { dispatch } = ctx.store;
    const defaultProps = {
      appBar: {
        buttons: [],
      },
      spacer: {
        clip: false,
      },
    };
    let pageProps = { ...defaultProps };

    if (Component.getInitialProps) {
      pageProps = merge({}, defaultProps, await Component.getInitialProps(ctx));
    }

    return { pageProps };
  }

  pageContext = null;

  componentDidMount() {
    const { pageProps, store } = this.props;
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    let { appBar, spacer } = pageProps;
    appBar = appBar || {};
    spacer = spacer || {};

    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
          jss={this.pageContext.jss}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <ReduxProvider store={store}>
              <Fragment>
                <AppBar {...appBar} />
                <Spacer appBar={!appBar.hidden} clip={spacer.clip}>
                  <Component pageContext={this.pageContext} {...pageProps} />
                </Spacer>
              </Fragment>
            </ReduxProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(Webclient));