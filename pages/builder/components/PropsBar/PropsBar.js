// import Link from 'next/link';
import propTypes from 'prop-types';
import { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';

// activeItem is set on item drop inside of canvas, or onFocus if in canvas.
// get information on activeItem.: object name, type, location,

const PropsBar = ({ classes, activeItem }) => {
  const state = {
    textField: '',
    secondField: '',
    activeItem: {},
  };
  // console.log('props activeItem', typeof (activeItem));
  const PropsItems = () => {
    const { id } = state.activeItem;
    switch (id) {
      case 'drawer/textbox':
        return (
          <>
            <Grid item className={classes.header}>
              <Typography className={classes.header}>{id}</Typography>
            </Grid>
            <form>
              <label className={classes.label}> Object Name: </label>
              <input name='objectName' className={classes.inputs}></input>
              <label className={classes.label}> Label: </label>
              <input name='label' className={classes.inputs}></input>
            </form>
          </>
        );
      default:
        // console.log(id);
        return (
          <>
          <Typography>{id}</Typography>
          <Typography>{typeof (id)}</Typography>

          </>
        );
    }
  };

  // console.log('Active Item: propsbar: ', activeItem);

  // const handleChange = (e) => {
  //   this.setState({ textField: e.target.value });
  // };
  //
  // const objectItems = [
  // { title: 'Object1', type: 'textbox', label: 'Object 1', name: 'Obejct 1',
  // icon: 'none', defaultValue: 'none' },
  // ];

  return (
    <Fragment >
      <Grid container className={classes.gridContainer}>
        <PropsItems/>
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
