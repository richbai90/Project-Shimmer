/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';
import { updateUsername } from './page-components/login/redux/actions/login';
import Login from './page-components/login/index';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  card: {
    height: 'fit-content',
    width: 'fit-content',
    margin: 'auto',
    marginTop: '30%',
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
  // console.log(state);
  const { username } = login.loginInfo;
  return { username };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  handleChange: updateUsername,
}, dispatch);

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
  };

  // handleChange = (e) => {
  //   this.setState({e.target.id: e.target.value})
  // }

  render() {
    const {
      classes, username, updateUsername,
    } = this.props;
    return (
      <Login
        classes={classes}
        username={username}
        updateUsername={updateUsername}
      />
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps,
    mapDispatchToProps),
)(LoginPage);
