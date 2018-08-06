// import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import propTypes from 'prop-types';

const Canvas = ({
  classes,
  tree,
}) => (
  <div className={classes.canvasBackground}>
    <Paper elevation={6} className={classes.canvas}>
        <Grid container>
        { tree }
      </Grid>
    </Paper>
  </div>
);

Canvas.propTypes = {
  classes: propTypes.shape({
    canvas: propTypes.string,
    drawingSurface: propTypes.string,
  }),
  tree: propTypes.node,
};

Canvas.defaultProps = {
  tree: [],
};

export default Canvas;
