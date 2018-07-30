/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';
import Router from 'next/router';
import { updateUsername, updatePassword } from './page-components/login/redux/actions/login';
import Login from './page-components/login/index';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  backgroundColor: {
    background: 'linear-gradient(to bottom, lightBlue, white)',
    height: '100vh',
  },
  card: {
    height: 'fit-content',
    width: 'fit-content',
    margin: 'auto',
    marginTop: '33vh',
    flexDirection: 'row',
  },
  container: {
    width: theme.spacing.unit * 55,
    height: theme.spacing.unit * 25,
    margin: theme.spacing.unit * 4,
    display: 'grid',
  },
  header: {
    width: '100%',
    height: 'fit-content',
    padding: theme.spacing.unit * 3,
    backgroundColor: '#4896ec',
    color: 'white',
  },
  textField: {
    width: '100%',
  },
  button: {
    backgroundColor: '#7CB342',
    color: 'white',
    marginTop: 'auto',
    marginLeft: 'auto',
    height: 'fit-content',
    width: 'fit-content',
  },
});

const mapStateToProps = ({ login }) => {
  const { username, password } = login.loginInfo;
  return { username, password };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  handleChange: updateUsername,
  handlePasswordChange: updatePassword,
}, dispatch);

const submitLogin = () => {
  Router.push('/');
};

class LoginPage extends React.Component {
  render() {
    const {
      classes, username, handleChange, password, handlePasswordChange,
    } = this.props;
    return (
      <Login
        submitLogin={submitLogin}
        classes={classes}
        username={username}
        password={password}
        updatePassword={handlePasswordChange}
        updateUsername={handleChange}
      />
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps,
    mapDispatchToProps),
)(LoginPage);
