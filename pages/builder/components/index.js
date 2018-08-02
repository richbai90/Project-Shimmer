// import Link from 'next/link';
import propTypes from 'prop-types';
import LeftBar from './leftBar';
import Canvas from './canvas';
import PropsBar from './propsBar';


const Builder = ({
  classes,
  // cursor,
  // componentMap,
  // componentTree,
  // templates,
  // loadingTemplates,
}) => (
  <div className={classes.root}>
        <LeftBar classes={classes}/>
        <Canvas classes={classes}/>
        <PropsBar classes={classes}/>
    {/* <Templates/> */}
  </div>
);

Builder.propTypes = {
  classes: propTypes.shape({
    appbar: propTypes.string,
    leftbar: propTypes.string,
    takespace: propTypes.string,
    rightbar: propTypes.string,
    index: propTypes.string,
  }).isRequired,
  cursor: propTypes.string,
  componentMap: propTypes.object,
  componentTree: propTypes.node,
};

export default Builder;
