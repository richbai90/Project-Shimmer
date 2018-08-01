import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const ActionMenu = ({
  classes,
  appBar,
  children,
}) => (
    <div className={`${classes.root} ${(appBar && classes.spacer) || ''}`}>{children}</div>
);

ActionMenu.propTypes = {
  classes: propTypes.shape({
    root: propTypes.string,
    spacer: propTypes.string,
  }).isRequired,
  appBar: propTypes.bool.isRequired,
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.element,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
};

const styles = (theme) => {
  const { toolbar } = theme.mixins;
  return {
    root: {
      ...theme.vh100,
      ...theme.vw100,
    },
    spacer: {
      paddingTop: toolbar.minHeight,
      [theme.breakpoints.up('sm')]: {
        paddingTop: toolbar[theme.breakpoints.up('sm')].minHeight,
      },
    },
  };
};

export default withStyles(styles)(ActionMenu);
