// import Link from 'next/link';
import { Fragment } from 'react';
import propTypes from 'prop-types';
import Drawer from '@root/components/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import shortid from 'shortid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
  console.log(itemID);
  clickHandler(itemID);
};

const DrawerItems = ({ items, classes }) => (
    <Fragment>
      <MenuList>
      {items.map((item) => {
        const { name, value, id } = item;
        if (value === 'heading') {
          return (
            <div>
              <Typography style={{ backgroundColor: '#42A5F5', color: 'white', paddingTop: '8px' }} className={classes.header}>
                {name}
              </Typography>
              <Divider/>
            </div>
          );
        }
        if (value === 'subheading') {
          return (
            <div>
              <Divider/>
              <Typography className={classes.subheader}>
                {name}
              </Typography>
              <Divider/>
            </div>
          );
        }
        return (
          <div>
            <MenuItem
              name={name}
              value={value}
              className={classes.drawerItems}
              key={shortid.generate()}
              draggable
              // onDrag={handleItemDrag({ value })}
            >
              <DraggableItem
                id={id}
                name={name}
                classes={classes}
                onClick={handleItemClick(setActiveItem, id)}
              />
            </MenuItem>
<<<<<<< HEAD
            { /* <Divider light/> */ }
=======
            {/* <Divider light/> */}
>>>>>>> a36fffe481145280b10e46ce094966f4199a7f86
          </div>
        );
      })
      }
      </MenuList>
    </Fragment>
);

DrawerItems.propTypes = {
  classes: propTypes.object,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
    }),
  ),
  classes: propTypes.shape({
    header: propTypes.string,
    subheader: propTypes.string,
    leftMargin: propTypes.string,
  }),
};

const ToolBar = ({
  activeItem = '',
  classes,
  loadComponentDetailsAction,
  closeComponentDetailsAction,
  setActiveItem,
  items = null,
  isOpen = false,
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
        setActiveItem = {setActiveItem}
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
