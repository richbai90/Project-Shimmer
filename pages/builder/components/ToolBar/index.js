import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

import ToolBarComponent from './ToolBar';
import { loadComponentDetailsAction, closeDrawerAction } from '../../redux/actions/drawer';
import { setActiveItem } from '../../redux/actions/component-state';

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
  highlightTool: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  header: {
    // marginLeft: theme.spacing.unit,
    fontSize: '1.5em',
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
  icon: {
    marginRight: 0,
  },
  toolBarDrawer: {
    width: 0,
  },
  toolBar: {
    zIndex: theme.zIndex.appBar + 1,
    background: theme.palette.common.white,
    // backgroundColor: theme.palette.grey[150],
  },
  drawerPaper: {
    // backgroundColor: theme.palette.primary.light,
    // backgroundColor: theme.palette.grey[800],
    background: 'rgba 66, 165, 245, .10',
    borderLeft: '.5px solid #c1c1c1',
    // borderLeft: '3px solid #42A5F5',
    boxShadow: '2px 5px 9px #c1c1c1', // janky solution to make drawer 'appear' over canvas paper.
    height: 'fit-content',
    radius: '5px',
    // marginLeft: '4px',
    // marginTop: '4px',
    display: 'flex',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    zIndex: theme.zIndex.appBar,
  },
  drawerItems: {
    height: 'auto',
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
    '&:hover': {
      backgroundColor: '#388E3C',
    },
  },
  button: {
    marginLeft: '4px',
    marginRight: '4px',
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadComponentDetailsAction,
  closeComponentDetailsAction: closeDrawerAction,
  setActiveItem,
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ToolBar);
