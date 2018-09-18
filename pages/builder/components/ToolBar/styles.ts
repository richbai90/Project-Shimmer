import { Theme, createStyles } from "@material-ui/core/styles";

export interface ToolbarStyles {
  icon: string;
  highlightTool: string;
  inactiveTool: string;
  allMenuItems: string;
  portalContainer: string;
  toolbar: string;
}

export default (theme : Theme) => createStyles<keyof ToolbarStyles>({
  toolbar: {
    paddingTop: 0,
    zIndex: theme.zIndex.appBar + 1,
    background: theme.helpers.backgrounds.darker,
  },
  icon: {
    margin: 'auto',
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
  },
  allMenuItems: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    height: theme.spacing.unit * 4,
  },
  inactiveTool: {
    '&:hover': {
      background: theme.palette.secondary.main,
      color: theme.palette.common.black,
    },
    '& $icon': {
      color: theme.helpers.backgrounds.light,
    },
  },
  highlightTool: {
    color: theme.palette.common.white,
    background: theme.helpers.backgrounds.dark,
    '&:hover': {
      background: theme.helpers.backgrounds.dark,
      color: theme.palette.common.white,
    },
    '& $icon': {
      color: theme.palette.common.white,
    },
  },
  portalContainer: {
    zIndex: theme.zIndex.appBar + 100,
    outline: 'none',
    position: 'absolute',
    left: theme.spacing.unit * 8,
    top: 0,
    boxShadow: '5px 1px 5px 0px rgba(0, 0, 0, 0.2), 2px 2px 2px 0px rgba(0, 0, 0, 0.14), 3px 3px 1px 0px rgba(0, 0, 0, 0.12)',
  },
});