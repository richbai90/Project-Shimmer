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
  icon: {
    margin: 0,
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 6,
    height: theme.spacing.unit * 6,
  },

  inactiveTool: {
    margin: 0,
    marginTop: theme.spacing.unit,
    width: theme.spacing.unit * 6,
    height: theme.spacing.unit * 6,
    backgroundColor: theme.palette.primary.main,
    '& $icon': { color: theme.palette.common.white },
  },
  highlightTool: {
    margin: 0,
    marginTop: theme.spacing.unit,
    width: '3em',
    height: '3em',
    backgroundColor: '#ffab00',
    '& $icon': {
      color: theme.palette.common.black,
    },
  },
  cssTriangle: {
    borderLeft: '.5em solid #ffab00',
    borderTop: '1.5em solid transparent',
    borderRight: '1.5em solid transparent',
    borderBottom: '1.5em solid transparent',
    top: '-3.25em',
    bottom: '0px',
    left: '3em',
    position: 'relative',
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
    // left: '3em',
    position: 'relative',
    width: 0,
    height: 0,
  },
  item: {
    // justifyContent: 'space-between',
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
    width: '250px',
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
  toolBar: {
    zIndex: theme.zIndex.appBar + 1,
    background: theme.palette.common.white,
    width: '3em',
    padding: 0,
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
  // button: {
  //   margin: '4px',
  // },
  portal: {
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'white',
    zIndex: theme.zIndex.appBar + 100,
    border: '2px solid #ffab00', // if there's no border on the right side, the top-right corner will not be rounded :(
    // borderRight: '2px solid #ffab00',
    // borderLeft: '2px solid #ffab00',
    borderRadius: '5px',
  },
  portalContainer: {
    zIndex: theme.zIndex.appBar + 100,
    height: 'fitContent',
    position: 'absolute',
    left: theme.spacing.unit * 7,
    top: theme.spacing.unit * 1,
  },
  portalItems: {
    margin: '2px 4px 4px 4px',
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

//        <>
        // </*<div>
        //   <DropdownMenuDetails style={{ width: '75px', justify: 'right' }}/>
        // </div>*/>
        // </>
