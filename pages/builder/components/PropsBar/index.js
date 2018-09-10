import { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import PropsBarComponent from './PropsBar';

/* PropsBar will need to be able to listen to changes in state:
   of what's the active item and it's properties.
   And to dispatch to change the state of the activeItem.
*/


const mapStateToProps = ({ builder }) => {
  const {
    activeItem,
  } = builder.draggable;
  return {
    activeItem,
  };
};

class PropsBar extends Component {
  state = {
    objectProps: {},
  }

  // componentDidUpdate( ){}

  render() {
    return (
      <PropsBarComponent { ...this.props} />
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    ...theme.helpers.vh100,
  },
  gridContainer: {
    width: theme.spacing.unit * 40,
    backgroundColor: theme.palette.backgrounds.dark,
    color: 'white',
    border: `5px solid ${theme.palette.backgrounds.darker}`,
    borderTop: `8px solid ${theme.palette.backgrounds.darker}`,
  },
  header: {
    backgroundColor: theme.palette.backgrounds.darker,
    height: '30px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  label: {
    fontFamily: 'Tahoma, Geneva, sans-serif',
    height: '9px',
  },
  inputs: {
    border: 0,
    outline: 0,
    background: 'transparent',
    borderBottom: '1px solid white',
    color: 'white',
  },
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(PropsBar);
