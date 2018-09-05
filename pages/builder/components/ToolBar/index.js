import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import ToolBarComponent from './ToolBar';
import { loadComponentDetailsAction, closeDrawerAction } from '../../redux/actions/drawer';
import { selectActiveItem } from '../../redux/actions/draggable';

class ToolBar extends Component {
  render() {
    return (
      <ToolBarComponent {...this.props}/>
    );
  }
}

const mapStateToProps = ({ builder }) => {
  const {
    isOpen,
    filterValue,
    activeItem,
    items,
  } = builder.drawer;
  return {
    isOpen,
    filterValue,
    activeItem,
    items,
  };
};

const styles = theme => ({
  grow: { ...theme.helpers.grow },
  root: {
    display: 'flex',
    ...theme.helpers.vh100,
  },
  toolBar: {
    paddingTop: 0,
    zIndex: theme.zIndex.appBar + 1,
    background: theme.palette.backgrounds.darker,
    width: theme.spacing.unit * 15,
  },
  icon: {
    margin: 0,
  },
  inactiveTool: {
    margin: `0 0 ${theme.spacing.unit}px 0`,
    padding: '4px',
    '&:hover': {
      background: theme.palette.secondary.main,
      color: theme.palette.common.black,
    },
    '& $icon': {
      color: theme.palette.backgrounds.light,
      margin: '0',
    },
  },
  darkFont: {
    margin: `${theme.spacing.unit}px`,
    color: theme.palette.common.black,
  },
  lightFont: {
    margin: `${theme.spacing.unit}px`,
    color: theme.palette.backgrounds.light,
  },
  whiteFont: {
    margin: `${theme.spacing.unit}px`,
    color: theme.palette.common.white,
  },
  highlightTool: {
    margin: `0 0 ${theme.spacing.unit}px 0`,
    padding: '4px',
    color: theme.palette.common.white,
    // backgroundColor: theme.palette.primary.main,
    background: theme.palette.primary.bgLight,
    '&:hover': {
      background: theme.palette.primary.bgLight,
      color: theme.palette.common.white,
    },
    '& $icon': {
      color: theme.palette.common.white,
    },
  },
  cssTriangleDown: {
    borderTop: `.5em solid ${theme.palette.common.black}`,
    borderLeft: '.5em solid transparent',
    borderRight: '.5em solid transparent',
    borderBottom: '.5em solid transparent',
    top: '1em',
    bottom: '0px',
    position: 'relative',
    width: 0,
    height: 0,
  },
  portalHeader: {
    backgroundColor: theme.palette.primary.main,
  },
  header: {
    fontSize: '1.5em',
    width: '215px',
    margin: 0,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  subheader: {
    fontSize: '1em',
    textAlign: 'center',
    marginLeft: theme.spacing.unit,
    // color: theme.palette.common.white,
  },
  marginLeft: { marginLeft: theme.spacing.unit },
  textField: {
    margin: `0 ${theme.spacing.unit} 0 ${theme.spacing.unit}`,
    width: theme.spacing.unit * 50,
  },
  buttonTypography: {
    margin: 'auto 4px auto auto',
  },
  portal: {
    // margin: theme.spacing.unit,
    backgroundColor: theme.palette.grey[50],
    // backgroundColor: theme.palette.backgrounds.dark,
    zIndex: theme.zIndex.appBar + 100,
    height: '100%',
    borderLeft: `.33em solid ${theme.palette.primary.main}`,

  },
  portalContainer: {
    outline: 'none',
    // zIndex: theme.zIndex.appBar + 100,
    position: 'absolute',
    left: theme.spacing.unit * 15,
    top: 0,
    height: '100%',
    boxShadow: '5px 1px 5px 0px rgba(0, 0, 0, 0.2), 2px 2px 2px 0px rgba(0, 0, 0, 0.14), 3px 3px 1px 0px rgba(0, 0, 0, 0.12)',
  },
  cssTriangle: {
    borderRight: `.5em solid ${theme.palette.primary.main}`,
    borderTop: '1em solid transparent',
    borderLeft: '1em solid transparent',
    borderBottom: '1em solid transparent',
    left: '-1.77em',
    position: 'absolute',
    width: 0,
    height: 0,
  },
  // portalItems: {
  //   padding: '2px 8px 8px 8px',
  //   // margin: '2px 4px 4px 8px',
  //   maxHeight: 'fitContent',
  // },
  customIcons: {
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    padding: theme.spacing.unit,
    position: 'relative',
    bottom: theme.spacing.unit,
    right: theme.spacing.unit,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadComponentDetailsAction,
  closeComponentDetailsAction: closeDrawerAction,
  selectActiveItem,
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ToolBar);
