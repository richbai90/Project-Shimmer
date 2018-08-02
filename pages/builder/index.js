/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { loadTemplate } from './redux/actions/templates';
import Builder from './components';

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1 1 auto',
  },
  canvasBackground: {
    ...theme.vh100,
    width: '100%',
    background: theme.palette.grey['300'],
    padding: theme.spacing.unit * 2,
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
  grow: {
    flex: '1 1 auto',
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
  return {
    componentMap,
    componentTree,
    templates,
    loadingTemplates,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTemplate,
}, dispatch);

class BuilderPage extends React.Component {

  static getInitialProps() {
    const buttons = [
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
    };
  }

  render() {
    const {
      classes,
      componentMap,
      componentTree,
      templates,
      loadingTemplates,

    } = this.props;

    return (
      <Builder
        classes={classes}
        map={componentMap}
        tree={componentTree}
        templates={templates}
        loadingTemplates={loadingTemplates}
      />
    );
  }
}

BuilderPage.propTypes = {
  classes: PropTypes.object.isRequired,
  // open: PropTypes.bool.isRequired,
  // handleOpen: PropTypes.func.isRequired,
  // handleClose: PropTypes.func.isRequired,
  handleMenuItemDrag: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(BuilderPage);
