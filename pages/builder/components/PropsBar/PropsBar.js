// import Link from 'next/link';
import propTypes from 'prop-types';
import { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// activeItem is set on item drop inside of canvas, or onFocus if in canvas.
// get information on activeItem.: object name, type, location,

const PropsBar = ({ classes, activeItem }) => {
  console.log('Active Item: propsbar: ', activeItem);
  return (
    <Fragment >
      <Grid container className={classes.gridContainer}>
        <Grid item className={classes.header}>
          <Typography color='white' className={classes.header}>Properties</Typography>
        </Grid>
        <Grid item>
          {activeItem}
        </Grid>
        <Grid item>

          Props Bar !!!
        </Grid>
      </Grid>
    </Fragment>
  );
};

PropsBar.propTypes = {
  activeItem: propTypes.object,
  classes: propTypes.shape({
    root: propTypes.string,
  }),
};

export default PropsBar;
