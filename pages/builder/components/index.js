// import Link from 'next/link';
import propTypes from 'prop-types';
import ToolBar from './ToolBar';
import Canvas from './Canvas';
import PropsBar from './propsBar';
import DragPreview from './DragPreview';


const Builder = ({
  classes,
  items,
  drawerFilterAction,
  openDrawerAction,
  closeDrawerAction,
  filterValue,
  isOpen,
  // cursor,
  // componentMap,
  // templates,
  // loadingTemplates,
}) => (
  <div className={classes.root}>
    <ToolBar
      items={items}
      open={isOpen}
      filterValue = {filterValue}
      openDrawerAction={openDrawerAction}
      closeDrawerAction={closeDrawerAction}
      drawerFilterAction={drawerFilterAction}
      classes={classes}
    />
    <DragPreview classes={classes}/>
    <Canvas classes={classes} />
    <PropsBar classes={classes}/>
    {/* <Templates/> */}
  </div>
);

Builder.propTypes = {
  classes: propTypes.shape({
    appbar: propTypes.string,
    toolbar: propTypes.string,
    takespace: propTypes.string,
    rightbar: propTypes.string,
    index: propTypes.string,
  }).isRequired,
  cursor: propTypes.string,
  componentMap: propTypes.object,
  componentTree: propTypes.node,
};

Builder.defaultProps = {
  tree: null,
};

export default Builder;
