// import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const handleChange = changeHandler => (
  (e) => {
    changeHandler(e.target.value);
  }
);

export default ({
  classes,
  username,
  updateUsername,
  password,
  updatePassword,
  submitLogin,
}) => (
  <div className={classes.backgroundColor}>
    <Grid container className={classes.root}>
      <Card className={classes.card} >
        <Typography className={classes.header} variant="headline">
          Login
        </Typography>
        <div className={classes.container}>
          <TextField
            value = {username}
            id= "username"
            label = "Name"
            className = {classes.textField}
            onChange = { handleChange(updateUsername) }
          />
          <TextField
            id="password"
            value={password}
            label = "Password"
            type='password'
            className = {classes.textField}
            onChange = { handleChange(updatePassword)}
          />
          <Typography color="primary">
            Trouble loggin in?
          </Typography>
          <Button
            value= 'submit'
            className={classes.button}
            variant="contained"
            onClick= {submitLogin}
          > Submit
          </Button>
        </div>
      </Card>
    </Grid>
  </div>
);
