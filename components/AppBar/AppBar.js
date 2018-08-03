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
            buttons.map((button) => {
              debugger;
              return button.click ? <Button color="inherit" onClick={button.click}>{button.text}</Button> : <Button color="inherit" >{button.text}</Button>;
            })
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

export default ActionMenu;
