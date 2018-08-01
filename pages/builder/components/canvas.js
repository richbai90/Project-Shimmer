// import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import propTypes from 'prop-types';

const Canvas = ({
  classes,

}) => (
  <Paper elevation={6} className={classes.canvas}>
    <Grid container />
  </Paper>
);

Canvas.propTypes = {
  classes: propTypes.shape({
    canvas: propTypes.string,
    drawingSurface: propTypes.string,
  }),
};

export default Canvas;
