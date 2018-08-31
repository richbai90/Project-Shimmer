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
    zIndex: theme.zIndex.appBar + 1,
    background: theme.palette.primary.darkest,
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
      color: theme.palette.common.white,
      margin: '0',
    },
    background: theme.palette.primary.main,
  },
  darkFont: {
    margin: `0 ${theme.spacing.unit}px`,
    color: theme.palette.common.black,
  },
  lightFont: {
    margin: `0 ${theme.spacing.unit}px`,
    color: theme.palette.common.white,
  },
  highlightTool: {
    margin: `0 0 ${theme.spacing.unit}px 0`,
    padding: '4px',
    color: theme.palette.common.white,
    // backgroundColor: theme.palette.primary.main,
    background: theme.palette.secondary.main,
    '&:hover': { background: theme.palette.secondary.main },
    '& $icon': {
      color: theme.palette.common.black,
    },
  },
  cssTriangle: {
    borderRight: `.5em solid ${theme.palette.secondary.light}`,
    borderTop: '1em solid transparent',
    borderLeft: '0em solid transparent',
    borderBottom: '1em solid transparent',
    top: '0px',
    right: '0em',
    position: 'absolute',
    width: 0,
    height: 0,
  },
  cssTriangleDown: {
    borderTop: '.5em solid #000000',
    borderLeft: '.5em solid transparent',
    borderRight: '.5em solid transparent',
    borderBottom: '.5em solid transparent',
    top: '1em',
    bottom: '0px',
    position: 'relative',
    width: 0,
    height: 0,
  },
  item: {
    marginTop: theme.spacing.unit,
    mararginBottom: theme.spacing.unit,
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $icon': {
        color: '#42A5F5',
      },
    },
  },
  header: {
    fontSize: '1.5em',
    width: '215px',
    margin: 0,
    textAlign: 'center',
  },
  subheader: {
    fontSize: '1em',
    textAlign: 'center',
    marginLeft: theme.spacing.unit,
  },
  marginLeft: { marginLeft: theme.spacing.unit },
  toolBarDrawer: {
    width: '25px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  submitButton: {
    margin: '0 4px 0 4px',
    color: 'white',
    backgroundColor: '#4CAF50',
    '&:hover': { backgroundColor: '#388E3C' },
  },
  buttonTypography: {
    margin: 'auto 4px auto auto',
  },
  portal: {
    boxShadow: '5px 1px 5px 0px rgba(0, 0, 0, 0.2), 2px 2px 2px 0px rgba(0, 0, 0, 0.14), 3px 3px 1px 0px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'rgba(999,999,999,0.7)',
    zIndex: theme.zIndex.appBar + 100,
  },
  portalContainer: {
    background: theme.palette.secondary.main,
    // zIndex: theme.zIndex.appBar + 100,
    position: 'absolute',
    left: theme.spacing.unit * 15,
    top: 0,
  },
  portalItems: {
    margin: '2px 4px 4px 4px',
    maxHeight: 'fitContent',
  },
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
