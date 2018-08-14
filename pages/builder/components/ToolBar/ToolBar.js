// import Link from 'next/link';
import { Fragment } from 'react';
import propTypes from 'prop-types';
import Drawer from '@root/components/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import shortid from 'shortid';
// import Typography from '@material-ui/core/Typography';

import CreateIcon from '@material-ui/icons/Create';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

// when an button is pressed, pops out with options, and title like "draw shape:"

const DrawerItems = ({ items }) => (
  <Fragment>
    <MenuList>
      {items.map((item) => {
        const {
          name,
          value, // parent,
        } = item;
        return (
          <MenuItem name={name} value={value} key={shortid.generate()}>
            {name}
          </MenuItem>
        );
      })}
      ;
    </MenuList>
  </Fragment>
);

DrawerItems.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
    }),
  ),
};

const handleMenuClick = (clickHandler, filterValue) => () => {
  clickHandler(filterValue);
};

const ToolBar = ({
  classes,
  loadComponentDetailsAction,
  closeComponentDetailsAction,
  items = null,
  isOpen = false,
}) => (
  <Fragment>
    <MenuList className={classes.toolBar}>
      <MenuItem onClick={handleMenuClick(loadComponentDetailsAction, 'none')}>
        <Fragment>
          <Tooltip title="Templates" placement="right">
            <ListItemIcon className={classes.icon}>
              <CreateIcon />
            </ListItemIcon>
          </Tooltip>
        </Fragment>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadComponentDetailsAction, 'shapes')}>
        <Fragment>
          <Tooltip title="Shapes" placement="right">
            <ListItemIcon className={classes.icon}>
              <CropSquareIcon value="shapes" />
            </ListItemIcon>
          </Tooltip>
        </Fragment>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadComponentDetailsAction, 'none')}>
        <ListItemIcon>
          <Fragment>
            <Tooltip title="Labels" placement="right">
              <TextFormatIcon className={classes.icon} />
            </Tooltip>
          </Fragment>
        </ListItemIcon>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClick(loadComponentDetailsAction, 'inputFields')}
      >
        <ListItemIcon className={classes.icon}>
          <Fragment>
            <Tooltip title="Input Fields" placement="right">
              <FormatShapesIcon value="inputFields" />
            </Tooltip>
          </Fragment>
        </ListItemIcon>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadComponentDetailsAction, 'none')}>
        <ListItemIcon className={classes.icon}>
          <Fragment>
            <Tooltip title="Tables" placement="right">
              <TableChartIcon />
            </Tooltip>
          </Fragment>
        </ListItemIcon>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadComponentDetailsAction, 'buttons')}>
        <ListItemIcon className={classes.icon}>
          <Fragment>
            <Tooltip title="Buttons" placement="right">
              <PlayCircleFilledIcon />
            </Tooltip>
          </Fragment>
        </ListItemIcon>
      </MenuItem>
    </MenuList>
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      variant="persistent"
      className={classes.toolBarDrawer}
      open={isOpen}
      onClickAway={closeComponentDetailsAction}
    >
      <DrawerItems items={items} />
    </Drawer>
  </Fragment>
);

ToolBar.propTypes = {
  classes: propTypes.object.isRequired,
  loadComponentDetailsAction: propTypes.func.isRequired,
  closeComponentDetailsAction: propTypes.func.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
  isOpen: propTypes.bool.isRequired,
};

export default ToolBar;
