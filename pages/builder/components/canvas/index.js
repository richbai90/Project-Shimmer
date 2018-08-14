import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

import CanvasComponent from './Canvas';


const Canvas = props => (
  <CanvasComponent { ...props } />
);

const mapStateToProps = ({ builder }) => ({
  map: builder.page.componentMap,
  tree: builder.page.componentTree,
});

const styles = theme => ({
  grow: {
    ...theme.helpers.grow,
  },
  canvasBackground: {
    display: 'flex',
    width: '100%',
    background: theme.palette.grey['300'],
    padding: theme.spacing.unit * 2,
    paddingBottom: '9vh',
    extend: 'grow',
  },
  canvas: {
    extend: 'grow',
    display: 'flex',
  },
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Canvas);
