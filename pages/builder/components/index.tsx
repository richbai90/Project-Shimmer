import ToolBar from "./ToolBar";
import Canvas from "./Canvas";
import PropsBar from "./PropsBar";

type BuilderProps = {
  classes: {
    appbar: string,
    toolbar: string,
    takespace: string,
    rightbar: string,
    index: string
    root: string
  },
  cursor?: string,
  componentMap?: object,
  componentTree?: React.ReactNode
};



const Builder: React.SFC<BuilderProps> = ({
  classes
}) => (
  <div className={classes.root}>
    <Canvas />
    <ToolBar />
    <PropsBar />
  </div>
);
export default Builder;
