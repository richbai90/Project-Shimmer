import { Theme, createStyles } from "@material-ui/core/styles";

export interface ToolbarStyles {
  portal: string;
  header: string;
  cssTriangle: string;
  componentDrawerHeader: string;
  subheader: string;
  paperIcon: string;
  darkFont: string;
  cssTriangleDown: string;
}

export default (theme : Theme) => createStyles<keyof ToolbarStyles>({
  darkFont: {
    margin: `${theme.spacing.unit}px`,
    color: theme.palette.common.black,
  },
  cssTriangleDown: {
    border: `${theme.spacing.unit} solid red`,
    borderTop: `${theme.spacing.unit} solid ${theme.palette.common.white}`,
    top: '1em',
    bottom: '0px',
    position: 'absolute',
    width: 0,
    height: 0,
  },
  componentDrawerHeader: {
    backgroundColor: theme.palette.primary.main,
    minHeight: theme.spacing.unit * 6,
  },
  header: {
    fontSize: '1.5em',
    margin: 0,
    textAlign: 'center',
    color: 'black',
  },
  subheader: {
    fontSize: '1em',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(28, 59, 87, 0.85)',
  },
  portal: {
    backgroundColor: 'rgba(216, 224, 231, 0.7)',
    height: '100%',
    width: theme.spacing.unit * 32,
  },
  cssTriangle: {
    border: '24px solid transparent',
    borderRight: `11px solid ${theme.palette.primary.main}`,
    borderLeft: '11px solid transparent',
    left: '-22px',
    top: '0px',
    position: 'absolute',
    width: 0,
    height: 0,
  },
  paperIcon: {
    minHeight: '5em',
    minWidth: '5em',
  }
});