import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import LeftBarComponent from './leftBar';

import { loadDrawerComponentsAction } from '../../redux/actions/drawer';

class LeftBar extends Component {
  render() {
    // const {
    //   items,
    //   isOpen,
    //   openDrawerAction,
    //   closeDrawerAction,
    //   drawerFilterAction,
    // } = this.props;
    return (
      <LeftBarComponent {...this.props}/>
    );
  }
}

const mapStateToProps = ({ builder }) => {
  const {
    isOpen,
    activeItem,
    items,
  } = builder.drawer;
  return {
    isOpen,
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
    marginRight: 0,
  },
  leftBar: {
    // zIndex: '1001',
  },
  leftBarDrawer: {
    width: 'auto',
    zIndex: '0',
  },
  drawerPaper: {
    display: 'flex',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    zIndex: '0',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      // duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    display: 'flex',
    position: 'relative',
    width: 'fit-content',
    zIndex: '1000',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
    }),
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDrawerComponentsAction,
}, dispatch);

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(LeftBar);
