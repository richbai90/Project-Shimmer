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
    composes: 'icon',
    color: theme.palette.common.white,
  },
  highlightTool: {
    margin: 0,
    width: theme.spacing.unit * 6,
    height: theme.spacing.unit * 6,
    background: theme.palette.secondary.main,
    color: theme.palette.common.black,
  },
  cssTriangle: {
    borderLeft: `.5em solid ${theme.palette.secondary.main}`,
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
  item: {
    marginTop: theme.spacing.unit,
    mararginBottom: theme.spacing.unit,
  },
  header: {
<<<<<<< HEAD
    fontSize: '1.5em',
    width: '215px',
=======
    width: '100%',
>>>>>>> 18e97922825527e0e6be6fda631b867c8ed378b5
    margin: 0,
    textAlign: 'center',
    background: theme.palette.secondary.main,
    position: 'relative',
    top: '-2em',
    paddingTop: '2em',
    borderRadius: '3em',
  },
  headerWrapper: {
    overflowY: 'hidden',
    position: 'relative',
    left: '-2.3em',
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
    background: theme.palette.primary.main,
    width: '3em',
    padding: 0,
  },
<<<<<<< HEAD
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
=======
>>>>>>> 18e97922825527e0e6be6fda631b867c8ed378b5
  portal: {
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'white',
    zIndex: theme.zIndex.appBar + 100,
<<<<<<< HEAD
    border: '2px solid #ffab00', // if there's no border on the right side, the top-right corner will not be rounded :(
=======
    borderLeft: `1.5em solid ${theme.palette.secondary.main}`,
    // borderTop: `1.5em solid ${theme.palette.secondary.main}`,
>>>>>>> 18e97922825527e0e6be6fda631b867c8ed378b5
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '30em',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingBottom: '1em',
  },
  portalContainer: {
    zIndex: theme.zIndex.appBar + 100,
    position: 'absolute',
    left: theme.spacing.unit * 7,
    top: theme.spacing.unit * 1,
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

//        <>
        // </*<div>
        //   <DropdownMenuDetails style={{ width: '75px', justify: 'right' }}/>
        // </div>*/>
        // </>
