import App, { Container } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import { Provider as ReduxProvider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Fragment } from "react";
import { merge } from "lodash";
import configureStore from "src/redux";
import getPageContext from "src/mui/getPageContext";
import Spacer from "../components/Spacer";
import AppBar from "../components/AppBar";
import { Store } from "redux";

interface Button {
  text: string;
  click: string;
}

interface DefaultProps {
  [index : string] : any;
  appBar: {
    buttons: Array<Button>;
  };
  spacer: {
    clip: boolean;
  };
}

interface Props {
  pageProps: DefaultProps;
  store: Store;
}

class Webclient extends App<Props> {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }
  static async getInitialProps({ Component, ctx }) {
    // const { dispatch } = ctx.store;
    const defaultProps = {
      appBar: {
        buttons: []
      },
      spacer: {
        clip: false
      }
    };
    let pageProps : DefaultProps = { ...defaultProps };
    if (Component.getInitialProps) {
      pageProps = merge({}, defaultProps, await Component.getInitialProps(ctx));
    }
    return { pageProps };
  }
  pageContext = null;
  componentDidMount() {
    // const { pageProps, store } = this.props;
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
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
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
          jss={this.pageContext.jss}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />

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
