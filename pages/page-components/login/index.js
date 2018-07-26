import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default ({ classes, username, updateUsername }) => (
  <div >
    <Grid container className={classes.root}>
      <Card className={classes.card} >
        <Typography className={classes.header} variant="headline">
          Login
        </Typography>
      <div className={classes.container}>
          <TextField
            value = {username}
            id= {username}
            label = "Name"
            className = {classes.textField}
            onChange = {updateUsername}
          />
          <TextField
            id="password"
            label = "Password"
            type='password'
            className = {classes.textField}
          />
        <Link href="/">
          <Button className={classes.button} variant="contained">
            Submit
          </Button>
        </Link>
      </div>
      </Card>
    </Grid>
  </div>
);
