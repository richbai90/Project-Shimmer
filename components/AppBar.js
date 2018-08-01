import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const ActionMenu = ({
  classes,
  buttons,
  hidden,
  label,
}) => (
    <AppBar className={`${classes.appBar} ${(hidden && classes.hidden) || ''}` } >
      <Toolbar>
        <Paper square={true} className={classes.label} >
          <Typography color="inherit">{label}</Typography>
        </Paper>
          {
            buttons.map(button => (
              button.click ? <Button color="inherit" onClick={button.click}>{button.text}</Button> : <Button color="inherit" >{button.text}</Button>
            ))
          }
      </Toolbar>
    </AppBar>
);

ActionMenu.propTypes = {
  classes: propTypes.shape({
    appBar: propTypes.string,
    label: propTypes.string,
  }).isRequired,
  buttons: propTypes.arrayOf(propTypes.shape({
    text: propTypes.string.isRequired,
    action: propTypes.func,
  })),
  label: propTypes.string,
  hidden: propTypes.bool,
};

ActionMenu.defaultProps = {
  buttons: [],
  hidden: false,
  label: '',
};

const styles = (theme) => {
  const { gutters, toolbar } = theme.mixins;
  return {
    label: {
      ...toolbar,
      marginLeft: -1 * gutters().paddingLeft,
      paddingLeft: gutters().paddingLeft,
      paddingRight: gutters().paddingRight,
      [theme.breakpoints.up('sm')]: {
        ...toolbar[theme.breakpoints.up('sm')],
        marginLeft: -1 * gutters()[theme.breakpoints.up('sm')].paddingLeft,
      },
      background: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      boxShadow: `inset -1px 0px 15px 0px rgba(0, 0, 0, 0.12),
      inset -2px 0px 2px 0px rgba(0, 0, 0, 0.14),
      inset -3px 0px 1px -2px rgba(0, 0, 0, 0.12);`,
    },
    appBar: {
      justifyContent: 'space-between',
    },
    hidden: {
      display: 'none',
    },
  };
};

export default withStyles(styles)(ActionMenu);
