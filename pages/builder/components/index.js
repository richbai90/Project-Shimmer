// import Link from 'next/link';
import propTypes from 'prop-types';
import ToolBar from './ToolBar';
import Canvas from './Canvas';
import PropsBar from './PropsBar';
import DragPreview from './DragPreview';

const Builder = ({
  classes,
  items,
  drawerFilterAction,
  openDrawerAction,
  closeDrawerAction,
  filterValue,
  isOpen,
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
  </div>
);

Builder.propTypes = {
  classes: propTypes.shape({
    toolbar: propTypes.string,
    rightbar: propTypes.string,
    index: propTypes.string,
  }).isRequired,
  items: propTypes.object,
  filterValue: propTypes.object,
  isOpen: propTypes.object,
  drawerFilterAction: propTypes.function,
  openDrawerAction: propTypes.function,
  closeDrawerAction: propTypes.function,
  cursor: propTypes.string,
  componentMap: propTypes.object,
  componentTree: propTypes.node,
};

Builder.defaultProps = {
  tree: null,
};

export default Builder;
