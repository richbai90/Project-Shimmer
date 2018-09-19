import { default as createMuiTheme, ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';
import { Helpers } from './theme.helpers';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    helpers: Helpers;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    helpers?: Helpers;
  }
}

function createTheme(options: ThemeOptions) {
  return (createMuiTheme as (options: ThemeOptions) => Theme) ({
   ...options,
  })
}

export default createTheme({
  palette: {
    primary: {
      main: '#2D3E50',
    },
    secondary: {
      main: '#1BBC93',
    },
  }
});