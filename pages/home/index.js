/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { Link } from '@root/routes';
import { open as openPassword, close as closePassword } from './redux/actions/password';
import Home from './components';

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
        linker={ Link }
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
