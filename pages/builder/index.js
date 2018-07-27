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

class Index extends React.Component {
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

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Index);
