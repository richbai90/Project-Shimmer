// import Link from 'next/link';
import { Fragment, PropTypes } from 'react';
import propTypes from 'prop-types';
import Drawer from '@root/components/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import shortid from 'shortid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import CreateIcon from '@material-ui/icons/Create';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DraggableItem from './DraggableItem';

const handleMenuClick = (clickHandler, filterValue) => () => {
  clickHandler(filterValue);
};

const handleItemClick = (clickHandler, itemID) => () => {
  console.log(clickHandler);
  clickHandler(itemID);
};

const handleDragStart = (clickHandler, itemID, dragging) => (
  (e) => {
    clickHandler(itemID, dragging);
  }
);

const handleDragEnd = (clickHandler, itemID, dragging) => (
  (e) => {
    console.log('words line 52');
    const infoID = `${itemID}, ${e.target.clientHeight}, ${e.target.clientWidth}`;
    console.log('infoID: ', infoID);
    clickHandler(itemID, dragging);
  }
);

const DrawerItems = ({ items, classes, selectActiveItem }) => (
  <Fragment>
    <Grid style={{ minwidth: '250px', jsutifyContent: 'space-around' }}>
    {items.map((item) => {
      const {
        name, value, id, parent,
      } = item;
      if (value === 'heading') {
        return (
          <div>
            <Typography
              key={shortid.generate()}
              style={{ backgroundColor: '#42A5F5', color: 'white', paddingTop: '8px' }}
              className={classes.header}
              id={value}
            >
              {name}
            </Typography>
            <Divider/>
          </div>
        );
      }
      if (value === 'subheading') {
        return (
          <div>
            <Typography key={shortid.generate()} className={classes.subheader}>
              {name}
            </Typography>
          </div>
        );
      }
      if (parent === 'buttons') {
        return (
          <Grid item draggable
            style={{ display: 'inline-block', height: 'auto', width: 'auto' }}
            onClick={handleItemClick(selectActiveItem, id)}
            onDragStart={handleDragStart(selectActiveItem, id, true)}
            onDragEnd={handleDragEnd(selectActiveItem, id, false)}
          >
            <DraggableItem
              className={classes.item}
              id={id}
              name={name}
              classes={classes}
              onClick={handleItemClick(selectActiveItem, id)}
              onDragStart={handleDragStart(selectActiveItem, id, true)}
              onDragEnd={handleDragEnd(selectActiveItem, id, false)}
            />
          </Grid>
        );
      }
      return (
        <div>
          <Grid
            draggable
            name={name}
            value={value}
            id={value}
            className={classes.drawerItems}
            key={shortid.generate()}
            style={{ width: '250px', height: 'auto' }}
            onClick={handleItemClick(selectActiveItem, id)}
            onDragStart={handleDragStart(selectActiveItem, id, true)}
            onDragEnd={handleDragEnd(selectActiveItem, id, false)}
          >
              <DraggableItem
                className={classes.item}
                id={id}
                name={name}
                classes={classes}
                onClick={handleItemClick(selectActiveItem, id)}
                onDragStart={handleDragStart(selectActiveItem, id, true)}
                onDragEnd={handleDragEnd(selectActiveItem, id, false)}
              />
          </Grid>
        </div>
      );
    })}
    </Grid>
  </Fragment>
);

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    dragging: monitor.dragging(),
  };
}

DrawerItems.propTypes = {
  // connectDragSource: PropTypes.func,
  // connectDragPreview: PropTypes.func,
  // selectActiveItem: PropTypes.func,
  classes: propTypes.object,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
      key: propTypes.string,
    }),
  ),
};

const ToolBar = ({
  activeItem = '',
  classes,
  loadComponentDetailsAction,
  closeComponentDetailsAction,
  // setActiveItem = null,
  items = null,
  isOpen = false,
  selectActiveItem,
}) => (
  <Fragment>
    <MenuList className={classes.toolBar}>
      <MenuItem className={classes.highlightTool} onClick={handleMenuClick(loadComponentDetailsAction, 'none')}>
        <Tooltip title="Templates" placement="right">
          <ListItemIcon className={classes.icon}>
            <CreateIcon />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem className={classes.highlightTool} onClick={handleMenuClick(loadComponentDetailsAction, 'shapes')}>
        <Tooltip title="Shapes" placement="right">
          <ListItemIcon className={classes.icon}>
            <CropSquareIcon value="shapes" />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem className={classes.highlightTool} onClick={handleMenuClick(loadComponentDetailsAction, 'text')}>
        <Tooltip title="Text" placement="right">
          <ListItemIcon className={classes.icon}>
            <TextFormatIcon value='text'/>
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem className={classes.highlightTool} onClick={handleMenuClick(loadComponentDetailsAction, 'inputFields')}>
        <Tooltip title="Input Fields" placement="right">
          <ListItemIcon className={classes.icon}>
            <FormatShapesIcon value="inputFields" />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem className={classes.highlightTool} onClick={handleMenuClick(loadComponentDetailsAction, 'none')}>
        <Tooltip title="Tables" placement="right">
          <ListItemIcon className={classes.icon}>
            <TableChartIcon />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem className={classes.highlightTool} onClick={handleMenuClick(loadComponentDetailsAction, 'buttons')}>
        <Tooltip title="Buttons" placement="right">
          <ListItemIcon className={classes.icon}>
            <PlayCircleFilledIcon value="buttons"/>
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
    </MenuList>
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      variant="persistent"
      className={classes.toolBarDrawer}
      open={isOpen}
      onClickAway={closeComponentDetailsAction}
    >
      <DrawerItems
        className={classes.drawerItems}
        selectActiveItem = {selectActiveItem}
        activeItem = {activeItem}
        items={items}
        classes={classes}
      />
    </Drawer>
  </Fragment>
);

ToolBar.propTypes = {
  activeItem: propTypes.object.isRequired,
  setActiveItem: propTypes.func.isRequired,
  classes: propTypes.object.isRequired,
  loadComponentDetailsAction: propTypes.func.isRequired,
  closeComponentDetailsAction: propTypes.func.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
  isOpen: propTypes.bool.isRequired,
};

export default ToolBar;
// export default DragSource(ToolBar);
