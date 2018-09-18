import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
type PropsBarProps = {
  activeItem?: object,
  classes?: {
    root?: string;
    gridContainer: string;
    header: string;
  }
};
const PropsBar: React.SFC<PropsBarProps> = ({ classes, activeItem }) => {
  return (
    <Fragment>
      <Grid container className={classes.gridContainer}>
        <Grid item className={classes.header}>
          <Typography className={classes.header}>
            Properties
          </Typography>
        </Grid>
        <Grid item>{activeItem}</Grid>
        <Grid item>Props Bar !!!</Grid>
      </Grid>
    </Fragment>
  );
};
export default PropsBar;
