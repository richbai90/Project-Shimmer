/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { loadTemplate } from './redux/actions/templates';
import Builder from './components';
// import {
//   open as openDrawerAction, close as closeDrawerAction,
//   filter as drawerFilterAction,
// } from './redux/actions/drawer';

const mapStateToProps = ({ builder }) => {
  const { componentMap, componentTree } = builder.page;
  const {
    available: templates,
    loading: loadingTemplates,
  } = builder.templates;
  // const {
  //   isOpen,
  //   activeItem,
  //   items,
  // } = builder.drawer;
  return {
    componentMap,
    componentTree,
    templates,
    loadingTemplates,
    // openDrawerAction,
    // closeDrawerAction,
    // isOpen,
    // activeItem,
    // items,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTemplate,
  // openDrawerAction,
  // closeDrawerAction,
  // drawerFilterAction,
}, dispatch);

class BuilderPage extends React.Component {
  static getInitialProps() {
    const buttons = [
      {
        text: 'New',
        key: 'AppBarNew',
        icon: 'AddBoxIcon',
        title: 'add_box',
        click: loadTemplate('withLeftMenu'),
      },
      {
        text: 'Save',
        key: 'AppBarSave',
        icon: 'SaveIcon',
        title: 'save',
        // click: () => console.log('hello'),
      },
      {
        text: 'Copy',
        key: 'AppBarCopy',
        icon: 'FileCopyIcon',
        title: 'file_copy',
      },
      {
        text: 'Delete',
        key: 'AppBarDelete',
        icon: 'DeleteIcon',
        title: 'delete',
      },
      {
        text: 'Undo',
        key: 'AppBarUndo',
        icon: 'UndoIcon',
        title: 'undo',
      },
      {
        text: 'Redo',
        key: 'AppBarRedo',
        icon: 'RedoIcon',
        title: 'redo',
      },
    ];
    return {
      appBar: {
        buttons,
        label: 'Page Builder',
      },
      spacer: {
        clip: true,
      },
    };
  }

  render() {
    const {
      classes,
      templates,
      loadingTemplates,
      drawer,
      items,
      isOpen,
      filterValue,
      openDrawerAction,
      closeDrawerAction,
      drawerFilterAction,
    } = this.props;

    return (
      <Builder
        classes={classes}
        // openDrawerAction={openDrawerAction}
        // closeDrawerAction={closeDrawerAction}
        templates={templates}
        loadingTemplates={loadingTemplates}
      //   drawerFilterAction={drawerFilterAction}
      //   items={items}
      //   open={isOpen}
      />
    );
  }
}

BuilderPage.propTypes = {
  classes: PropTypes.object.isRequired,
  // handleOpen: PropTypes.func.isRequired,
  // handleClose: PropTypes.func.isRequired,
  // handleMenuItemDrag: PropTypes.func.isRequired,
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
  // leftBarDrawer: {
  //   zIndex: theme.zIndex.appBar - 1,
  // },

  canvasBackground: {
    display: 'flex',
    background: theme.palette.grey['300'],
    padding: theme.spacing.unit * 2,
    paddingBottom: '9vh',
    extend: 'grow',
  },
  canvas: {
    extend: 'grow',
  },
  rightBar: {
    width: '250px',
    fontSize: '.75em',
    margin: theme.spacing.unit,
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(BuilderPage);
