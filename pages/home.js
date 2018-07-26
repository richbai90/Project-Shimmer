/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { open as openPassword, close as closePassword } from './page-components/home/redux/actions/password';
import Home from './page-components/home';
import Login from './page-components/login/index.js'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const mapStateToProps = ({ home }) => {
  const { open } = home.password;
  return { open };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  handleOpen: openPassword,
  handleClose: closePassword,
}, dispatch);

class Index extends React.Component {
  render() {
    const {
      classes,
      open,
      handleOpen,
      handleClose,
    } = this.props;

    return (
      <Home
        classes={classes}
        open={open}
        handleOpen={ handleOpen }
        handleClose={ handleClose }
      />
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Index);
