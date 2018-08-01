import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

export default ({
  classes,
}) => (
  <div>
    <AppBar className={classes.actionMenuRoot}>
      <Toolbar className={classes.spaceBetween}>
        <Typography>Branding</Typography>
          <Button>Save</Button>
          <Button>Copy</Button>
          <Button>Cut</Button>
          <Button>Delete</Button>
          <Button>Backward</Button>
          <Button>Forward</Button>
          <Button>Align</Button>
        <Button color="inherit">Login/Logout</Button>
      </Toolbar>
    </AppBar>
  </div>
);
