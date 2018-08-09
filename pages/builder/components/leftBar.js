// import Link from 'next/link';
import { Fragment } from 'react';
import propTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
// import Typography from '@material-ui/core/Typography';

import CreateIcon from '@material-ui/icons/Create';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

// when an button is pressed, pops out with options, and title like "draw shape:"

const DrawerItems = ({ items }) => {

  return (
    <Fragment>
      <MenuList>
      {
        items.map((item) => {
          const {
            name, value, // parent,
          } = item;
          return (
            <MenuItem
            name={name}
            value={value}
            // style={{ display: 'none' }}
            >{name}
            </MenuItem>
          );
        })
      };
      </MenuList>
    </Fragment>
  );
};

const handleMenuClick = (clickHandler, filterValue) => (
  (e) => {
    window.clickHandler = clickHandler
    console.log(filterValue);
    clickHandler(filterValue);
  }
);

const leftBar = ({
  classes,
  setDrawerFilter,
  handleClose,
  openShapesDrawer,
  drawerFilter,
  items,
  // handleMenuItemDrag,
  // draggingItem,
}) => (
  <Fragment>
    <MenuList>
      <MenuItem /* ------ Templates ------ */ >
        <Tooltip title="Templates" placement="right">
          <ListItemIcon className={classes.icon}>
              <CreateIcon
                /* onClick: open modal */
                onClick={handleMenuClick(drawerFilter, 'none')}
              />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem /* ------ Shapes ------ */ >
        <Tooltip title="Shapes" placement="right">
          <ListItemIcon className={classes.icon}>
            <CropSquareIcon
              onClick={handleMenuClick(drawerFilter, 'shapes')}
              value='shapes'
            />
            </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem /* ------ Labels: ------ */>
        <ListItemIcon className={classes.icon}>
          <Tooltip title="Labels" placement="right">
            <TextFormatIcon
              /* onDrag: handle activeItem */
              onClick={handleMenuClick(drawerFilter, 'none')}

            />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon className={classes.icon}>
          <Tooltip title="Input Fields" placement="right">
            <FormatShapesIcon /* ------ Input Fields ------ */
              value='inputFields'
              onClick={handleMenuClick(drawerFilter, 'inputFields')}
            />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon className={classes.icon}>
          <Tooltip title="Tables" placement="right">
            <TableChartIcon
              onClick={handleMenuClick(drawerFilter, 'none')}
            />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon className={classes.icon}>
          <Tooltip title="Buttons" placement="right">
            <PlayCircleFilledIcon /* ------ Buttons ------ */
              onClick={handleMenuClick(drawerFilter, 'none')}
            />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
    </MenuList>
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      variant="permanent" // or persistant
      className={classes.leftBarDrawer}
      // open={open}
    >
      < DrawerItems items={items} />
    </Drawer>
  </Fragment>
);

leftBar.propTypes = {
  classes: propTypes.object.isRequired,
  // setDrawerFilter: propTypes.functions.isRequired,
};

export default leftBar;
