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
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  index: {
    marginTop: '60px', // this is a bad solution for appbar overlapping page
    height: '200vh',
  },
  appbar: {
    width: '100vw',
    position: 'fixed',
    overflow: 'hidden',
    height: '50px',
  },
  actionMenuRoot: {
    flexGrow: 1,
    flexDirection: 'column',
    height: 'fitContent',
  },
  leftbar: {
    height: '100vh',
    width: theme.spacing.unit * 7,
    // position: 'fixed',
  },
  canvas: {
    margin: theme.spacing.unit * 2,
  },
  drawingSurface: {
    height: '80%',
    width: '80%',
  },
  rightbar: {
    height: '100vh',
    width: 'fit-content',
    backgroundColor: 'green',
  },
  takespace: {
    backgroundColor: 'lightgrey',
    height: '100vh',
    flexGrow: 1,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  red: {
    overflow: 'hidden',

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
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(BuilderPage);
