import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const Spacer = ({
  classes,
  appBar,
  children,
  clip,
}) => (
    <div className={`${(appBar && classes.spacer) || ''} ${clip && classes.clip}`}>{children}</div>
);

Spacer.propTypes = {
  classes: propTypes.shape({
    root: propTypes.string,
    spacer: propTypes.string,
    clip: propTypes.string,
  }).isRequired,
  appBar: propTypes.bool.isRequired,
  clip: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.element,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
};

Spacer.defaultProps = {
  clip: false,
};

const styles = (theme) => {
  const { toolbar } = theme.mixins;
  return {
    root: {
      ...theme.helpers.vh100,
      ...theme.helpers.vw100,
    },
    spacer: {
      extend: 'root',
      paddingTop: toolbar.minHeight,
      [theme.breakpoints.up('sm')]: {
        paddingTop: toolbar[theme.breakpoints.up('sm')].minHeight,
      },
    },
    clip: {
      overflow: 'hidden',
    },
  };
};

export default withStyles(styles)(Spacer);
