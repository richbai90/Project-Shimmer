/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { loadTemplate } from './redux/actions/templates';
import Builder from './components';
import { open as openDrawer, close as closeDrawer } from './redux/actions/drawer';

const styles = theme => ({
  grow: { ...theme.helpers.grow },
  root: {
    display: 'flex',
    ...theme.helpers.vh100,
  },
  icon: {
    marginRight: 0,
  },
  leftBarDrawer: {
    zIndex: theme.zIndex.appBar - 1,
  },
  drawerPaper: {
    position: 'relative',
    // width: drawerWidth,
  },
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

const mapStateToProps = ({ builder }) => {
  const { componentMap, componentTree } = builder.page;
  const {
    available: templates,
    loading: loadingTemplates,
  } = builder.templates;

  // const { openDrawer, closeDrawer } = builder.leftBar;

  return {
    componentMap,
    componentTree,
    templates,
    loadingTemplates,
    openDrawer,
    closeDrawer,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTemplate,
  handleOpen: openDrawer,
  handleClose: closeDrawer,
}, dispatch);

class BuilderPage extends React.Component {
  static getInitialProps() {
    const buttons = [
      {
        text: 'New',
        click: loadTemplate('withLeftMenu'),
      },
      {
        text: 'Save',
        click: () => console.log('hello'),
      },
      {
        text: 'Copy',
      },
      {
        text: 'Delete',
      },
      {
        text: 'Undo',
      },
      {
        text: 'Redo',
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
      openDrawer,
      handleOpen,
      handleClose,
    } = this.props;

    return (
      <Builder
        classes={classes}
        openDrawer={openDrawer}
        handleOpen={ handleOpen }
        handleClose={ handleClose }
        templates={templates}
        loadingTemplates={loadingTemplates}
      />
    );
  }
}

BuilderPage.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  // handleMenuItemDrag: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(BuilderPage);
