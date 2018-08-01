// import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ActionMenu from './actionMenu';
import LeftBar from './leftBar';
import Canvas from './canvas';
import PropsBar from './propsBar';

export default ({
  classes,
  cursor,
  componentMap,
  componentTree,
  templates,
  loadingTemplates,
}) => (
  <Grid container >
      <Grid item container>
          <ActionMenu className={classes.appbar} classes={classes} />
      </Grid >
      <Grid container className={classes.index}>

        <Grid item className={classes.leftbar}>
          <LeftBar classes={classes}/>
        </Grid>
        <Grid item className={classes.takespace}>
          <Canvas classes={classes}/>
        </Grid>
        <Grid item className={classes.rightbar}>
          <PropsBar classes={classes}/>
        </Grid>

      </Grid>
    {/* <Templates/> */}
  </Grid>
);
