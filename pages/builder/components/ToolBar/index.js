import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

import ToolBarComponent from './ToolBar';
import { loadComponentDetailsAction, closeDrawerAction } from '../../redux/actions/drawer';

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
  header: {
    marginLeft: theme.spacing.unit,
    fontSize: '1.5em',
    // textAlign: 'center',
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
    zIndex: theme.zIndex.appBar - 1,
    background: theme.palette.common.white,
  },
  drawerPaper: {
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: theme.palette.grey[50],
    display: 'flex',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    zIndex: theme.zIndex.appBar - 2,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadComponentDetailsAction,
  closeComponentDetailsAction: closeDrawerAction,
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ToolBar);
