import { connect } from 'react-redux';
import CanvasComponent from './canvas';


const Canvas = props => (
  <CanvasComponent { ...props } />
);

const mapStateToProps = ({ builder }) => ({
  map: builder.page.componentMap,
  tree: builder.page.componentTree,
});

export default connect(mapStateToProps)(Canvas);
