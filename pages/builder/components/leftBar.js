// import Link from 'next/link';
import { Fragment } from 'react';
import propTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import CreateIcon from '@material-ui/icons/Create';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

// when an button is pressed, pops out with options, and title like "draw shape:"

const ShapesList = () => (
    <Fragment>
      <Typography>Shapes</Typography>
      <MenuList>
        <MenuItem>
          Box Container
        </MenuItem>
        <MenuItem>
          Line
        </MenuItem>
      </MenuList>
    </Fragment>
);

const InputFieldsList = () => {
  const items = [
    { name: 'Textbox', value: 'textbox' },
    { name: 'multiline', value: 'multiline' },
    { name: 'Drop down Menu', value: 'Drop down Menu' },
    { name: 'radio box', value: 'radio box' },
    { name: 'checkbox', value: 'checkbox' },
  ]

  return (
    <Fragment>
      <Typography>Input Fields</Typography>
      <MenuList>
      {items.map((item) => {
        const name = item.name
        const value = item.value
        return (
            <MenuItem
            name={name}
            value={value}
            >{name}
            </MenuItem>
        );
      }) };
      </MenuList>
    </Fragment>
  );
};


const leftBar = ({
  classes,
  drawerOpen,
  open,
  handleClose,
  handleOpen,
  // cursorSelect,
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
              />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem /* ------ Shapes ------ */ >
        <Tooltip title="Shapes" placement="right">
          <ListItemIcon className={classes.icon}>
            <CropSquareIcon
              onClick={handleOpen}
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
            />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon className={classes.icon}>
          <Tooltip title="Input Fields" placement="right">
            <FormatShapesIcon /* ------ Input Fields ------ */
             onClick={handleOpen}
             value='inputFields'
            />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon className={classes.icon}>
          <Tooltip title="Tables" placement="right">
            <TableChartIcon />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon className={classes.icon}>
          <Tooltip title="Buttons" placement="right">
            <PlayCircleFilledIcon /* ------ Buttons ------ */
          />
          </Tooltip>
        </ListItemIcon>
      </MenuItem>
    </MenuList>
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      variant="permanent" // or persistant
      className={classes.leftBarDrawer}
    >
      < InputFieldsList />
      < ShapesList />
    </Drawer>
  </Fragment>
);

leftBar.propTypes = {
  classes: propTypes.object.isRequired,
};

export default leftBar;
