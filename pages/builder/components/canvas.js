// import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';



export default ({
  classes,

}) => (
  <Grid container className={classes.canvas}>
    <Grid item >
      <Paper className={classes.drawingSurface}>

      </Paper>
    </Grid>
  </Grid>
);
