import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import ToolbarComponent from './Toolbar';
import { loadComponentDetailsAction, closeDrawerAction } from '../../redux/actions/drawer';
import { selectActiveItem } from '../../redux/actions/draggable';

class Toolbar extends Component {
  state = {
    portalFilter: '',
    portalOpen: false,
    portalItems: [],
  };

  setPortalFilter(portalFilter) {
    this.setState({ portalFilter, portalOpen: true });
  }

  setPortalExistance(portalOpen) {
    this.setState({ portalOpen });
  }

  updatePortalItems(items) {
    this.setState({ portalItems: items });
  }

  render() {
    return (
      <ToolbarComponent
        {...this.props}
        portalOpen={this.state.portalOpen}
        portalItems={this.state.portalItems}
        portalFilter={this.state.portalFilter}
        setPortalFilter={this.setPortalFilter.bind(this)}
        updatePortalItems={this.updatePortalItems.bind(this)}
        setPortalExistance={this.setPortalExistance.bind(this)}
      />
    );
  }
}

const mapStateToProps = ({ builder }) => {
  const {
    portalFilter,
    activeItem,
    items,
    portalOpen,
  } = builder.drawer;
  return {
    portalFilter,
    activeItem,
    items,
    portalOpen,
  };
};

const styles = theme => ({
  grow: { ...theme.helpers.grow },
  root: {
    display: 'flex',
    ...theme.helpers.vh100,
  },
  toolBar: {
    paddingTop: 0,
    zIndex: theme.zIndex.appBar + 1,
    background: theme.palette.backgrounds.darker,
  },
  icon: {
    margin: 'auto',
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
  },
  allMenuItems: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    height: theme.spacing.unit * 4,
  },
  inactiveTool: {
    '&:hover': {
      background: theme.palette.secondary.main,
      color: theme.palette.common.black,
    },
    '& $icon': {
      color: theme.palette.backgrounds.light,
    },
  },
  highlightTool: {
    color: theme.palette.common.white,
    background: theme.palette.backgrounds.dark,
    '&:hover': {
      background: theme.palette.backgrounds.dark,
      color: theme.palette.common.white,
    },
    '& $icon': {
      color: theme.palette.common.white,
    },
  },
  darkFont: {
    margin: `${theme.spacing.unit}px`,
    color: theme.palette.common.black,
  },
  lightFont: {
    margin: `${theme.spacing.unit}px`,
    color: theme.palette.backgrounds.light,
  },
  whiteFont: {
    margin: `${theme.spacing.unit}px`,
    color: theme.palette.common.white,
    verticleAlign: 'center',
    textAlign: 'right',
    display: 'inline',
  },
  cssTriangleDown: {
    border: `${theme.spacing.unit} solid red`,
    borderTop: `${theme.spacing.unit} solid ${theme.palette.common.white}`,
    top: '1em',
    bottom: '0px',
    position: 'absolute',
    width: 0,
    height: 0,
  },
  portalHeader: {
    backgroundColor: theme.palette.primary.main,
    minHeight: theme.spacing.unit * 6,
  },
  header: {
    fontSize: '1.5em',
    margin: 0,
    textAlign: 'center',
    color: 'black',
  },
  subheader: {
    fontSize: '1em',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(28, 59, 87, 0.85)',
  },
  marginLeft: { marginLeft: theme.spacing.unit },
  textField: {
    margin: `0 ${theme.spacing.unit} 0 ${theme.spacing.unit}`,
    width: theme.spacing.unit * 50,
  },
  buttonTypography: {
    margin: 'auto 4px auto auto',
  },
  portal: {
    backgroundColor: 'rgba(216, 224, 231, 0.7)',
    height: '100%',
    width: theme.spacing.unit * 32,
  },
  portalContainer: {
    zIndex: theme.zIndex.appBar + 100,
    outline: 'none',
    position: 'absolute',
    left: theme.spacing.unit * 8,
    top: 0,
    boxShadow: '5px 1px 5px 0px rgba(0, 0, 0, 0.2), 2px 2px 2px 0px rgba(0, 0, 0, 0.14), 3px 3px 1px 0px rgba(0, 0, 0, 0.12)',
  },
  cssTriangle: {
    border: '24px solid transparent',
    borderRight: `11px solid ${theme.palette.primary.main}`,
    borderLeft: '11px solid transparent',
    left: '-22px',
    top: '0px',
    position: 'absolute',
    width: 0,
    height: 0,
  },
  customIcons: {
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    padding: theme.spacing.unit,
    position: 'relative',
    bottom: theme.spacing.unit,
    right: theme.spacing.unit,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadComponentDetailsAction,
  closeComponentDetailsAction: closeDrawerAction,
  selectActiveItem,
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(Toolbar);
