import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import propTypes from 'prop-types';
import AppBar from './AppBar';


const ActionMenu = ({ dispatch, ...props }) => {
  const buttons = props.buttons.map(button => (
    button.click
      ? { ...button, click: () => dispatch({ ...button.click }) }
      : button
  ));
  return <AppBar {...props} buttons={buttons} />;
};


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
  dispatch: propTypes.func,
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
      background: theme.palette.common.white,
      color: theme.palette.common.black,
      display: 'flex',
      alignItems: 'center',
      // boxShadow: `inset -1px 0px 15px 0px rgba(0, 0, 0, 0.12),
      // inset -2px 0px 2px 0px rgba(0, 0, 0, 0.14),
      // inset -3px 0px 1px -2px rgba(0, 0, 0, 0.12);`,
    },
    appBar: {
      justifyContent: 'space-between',
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,

    },
    hidden: {
      display: 'none',
    },
  };
};

const mapStateToProps = () => ({});
export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(ActionMenu);
