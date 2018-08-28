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
  // highlightTool: {
  //   width: '24px',
  //   '&:focus': {
  //     backgroundColor: theme.palette.primary.main,
  //
  //     '& $primary, & $icon': {
  //       color: theme.palette.common.white,
  //       width: '30px',
  //     },
  //   },
  // },
  icon: {
    marginRight: 0,
  },
  inactiveTool: {
    width: '28px',
    height: '30px',
    margin: '5px 0px 0px 0px',
    padding: '10 15 10 15',
    // borderRadius: '30px',
    backgroundColor: theme.palette.primary.main,
    '& $primary, & $icon': {
      color: theme.palette.common.white,
    },
  },
  highlightTool: {
    width: '55px',
    height: '30px',
    marginTop: '5px',
    // borderRadius: '30px',
    backgroundColor: '#ffa754',
    '& $primary, & $icon': {
      color: theme.palette.common.black,
    },
  },
  // cssTriangle: {
  //   borderLeft: '30px solid  #ffa754',
  //   border: '2px solid  #ffa754',
  // },
  //   pointingTriangle: {
  //     width: '30px',
  //     height: '30px',
  //     position: 'relative',
  //     left: '45%',
  //     top: '-47px',
  //     marginLeft: '30px',
  //   },
  //   cssTriangle: {
  //     borderLeft: '20px solid #0099CC',
  //     borderTop: '30px solid transparent',
  //     borderRight: '30px solid transparent',
  //     borderBottom: '30px solid transparent',
  //     top: '0px',
  //     bottom: '0px',
  //     content: '',
  //     position: 'relative',
  //     left: '45%',
  //     marginLeft: '30px',
  //     width: 0,
  //     height: 0,
  // },
  header: {
    // marginLeft: theme.spacing.unit,
    fontSize: '1.5em',
    width: '250px',
    margin: 0,
    textAlign: 'center',
  },
  subheader: {
    fontSize: '.75em',
    textAlign: 'left',
    marginLeft: theme.spacing.unit,
  },
  marginLeft: {
    marginLeft: theme.spacing.unit,
  },

  toolBarDrawer: {
    width: '25px',
  },
  toolBar: {
    zIndex: theme.zIndex.appBar + 1,
    background: theme.palette.common.white,
    // backgroundColor: theme.palette.grey[150],
    width: '60px',
    padding: 0,
    margin: 0,
  },
  drawerPaper: {
    background: 'rgba 66, 165, 245, .10',
    boxShadow: '2px 5px 9px #c1c1c1', // janky solution to make drawer 'appear' over canvas paper.
    display: 'flex',
    position: 'relative',
    width: 'fit-content',
    zIndex: theme.zIndex.appBar,
    minHeight: '360px',
    height: 'fit-content',
    justify: 'space-between',
    backgroundColor: 'yellow',
  },
  drawerItems: {
    justifyContent: 'space-between',
    height: '50px',
    width: 'auto',
    cursor: 'grab',
    verticalAlign: 'bottom',
    '&:active': { cursor: 'grabbing' },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  submitButton: {
    marginLeft: '4px',
    marginRight: '4px',
    color: 'white',
    backgroundColor: '#4CAF50',
    '&:hover': { backgroundColor: '#388E3C' },
  },
  item: {
    margin: '4px',
    padding: '4px',
    height: 'auto',
    justifyContent: 'space-between',
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary': {
      // '& $icon': {
        color: '#42A5F5',
      },
    },
  },
  button: {
    margin: '4px',
  },
  portal: {
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'white',
    margin: '4px',
    zIndex: theme.zIndex.appBar + 100,
    border: '2px solid  #ffa754', // if there's no border on the right side, the top-right corner will not be rounded :(
    // borderRight: '2px solid #ffa754',
    // borderLeft: '2px solid  #ffa754',
    borderRadius: '5px',
  },
  portalContainer: {
    zIndex: theme.zIndex.appBar + 100,
    width: 'fitContent',
    position: 'absolute',
    left: 0,
    top: 5,
    marginLeft: '65px',
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
