/* eslint-disable no-underscore-dangle */


import { SheetsRegistry, create } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import jssPreset from 'jss-preset-default';

import helpers from './jssHelpers';
// Configure JSS
const jss = create(jssPreset());

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: '#b6ddff',
      light: '#70bcff',
      main: '#1e88e5',
      dark: '#0a4980',
      darker: '#073054',
      darkest: '#18242f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd57f',
      main: '#ffab00',
      dark: '#7d5400',
      darker: '#452e00',
      contrastText: '#fff',
    },
    other: {
      greenBlue: '#1ed7e5',
      darkGreenBlue: '#10777f',
      violetBlue: '#9C74E5',
      redOrange: '#ff7d7f',
      yellowOrange: '#ffde45',
    },
  },
  helpers,
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    // custom instance of jss
    jss,
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
