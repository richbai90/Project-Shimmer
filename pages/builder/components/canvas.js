// import Link from 'next/link';
import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import propTypes from 'prop-types';

const Canvas = ({
  classes,
}) => (
  <div className={classes.canvasBackground}>
    <Paper elevation={6} className={classes.canvas}>
      <canvas id='canvas'>
        <Grid container />
        "You can see this text if your browser doesn't support HTML5"
      </canvas>
    </Paper>
  </div>
);

Canvas.propTypes = {
  classes: propTypes.shape({
    canvas: propTypes.string,
    drawingSurface: propTypes.string,
  }),
};

export default Canvas;
