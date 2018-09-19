// import Link from 'next/link';
import Paper from "@material-ui/core/Paper";
import { CanvasStyles } from ".";

interface CanvasProps extends CanvasStyles {
  tree?: React.StatelessComponent
  dragging?: boolean;
  activeItem?: boolean;
};

const Canvas: React.SFC<CanvasProps> = ({
  classes,
  tree: Tree,
  dragging = false,
  activeItem = false,
}) => (
  <div className={classes.canvasBackground} id="canvas">
    <Paper elevation={6} className={classes.canvas}>
      {Tree ? <Tree /> : null}
    </Paper>
  </div>
);
export default Canvas;
