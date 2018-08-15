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

import DraggableItem from './draggableItem';


const handleMenuClick = (clickHandler, filterValue) => (
  () => {
    clickHandler(filterValue);
  }
);

// const handleItemDrag = (setActiveItem, val) => (
//   (e) => {
//     // console.log('handle drag', val, e.target.value);
//     setActiveItem(val);
//   }
// );

const DrawerItems = ({ items, classes }) => {
  return (
    <Fragment>
      <MenuList>
      {items.map((item) => {
        const { name, value } = item;
        if (value === 'headding') {
          return (
            <Fragment>
              <Typography className={classes.header}>
                {name}
              </Typography>
              <Divider/>
            </Fragment>
          );
        }
        return (
          <MenuItem
            name={name}
            value={value}
            key={shortid.generate()}
            // draggable
            // onDrag={handleItemDrag({ value })}
          >
            <DraggableItem name={name}/>
          </MenuItem>
        );
      })
      }
      </MenuList>
    </Fragment>
  );
};

const leftBar = ({
  classes,
  loadDrawerComponentsAction,
  items = null,
  isOpen = false,
}) => (
  <Fragment>
    <MenuList className={classes.leftBar}>
      <MenuItem
        onClick={handleMenuClick(loadDrawerComponentsAction, 'none')} >
        <Tooltip title="Templates" placement="right">
          <ListItemIcon className={classes.icon}>
            <CreateIcon />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadDrawerComponentsAction, 'shapes')} >
        <Tooltip title="Shapes" placement="right">
          <ListItemIcon className={classes.icon}>
            <CropSquareIcon name="Shapes" value='shapes' />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadDrawerComponentsAction, 'none')} >
        <Tooltip title="Labels" placement="right">
          <ListItemIcon className={classes.icon} >
            <TextFormatIcon name="Label" value='label'/>
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadDrawerComponentsAction, 'inputFields')} >
        <Tooltip title="Input Fields" placement="right">
        <ListItemIcon className={classes.icon}>
            <FormatShapesIcon name="Input Fields" value='inputFields' />
            </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem onClick={handleMenuClick(loadDrawerComponentsAction, 'none')} >
        <Tooltip title="Tables" placement="right">
          <ListItemIcon className={classes.icon}>
            <TableChartIcon />
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
      <MenuItem onClick={loadDrawerComponentsAction} >
        <Tooltip title="Buttons" placement="right">
          <ListItemIcon className={classes.icon}>
            <PlayCircleFilledIcon/>
          </ListItemIcon>
        </Tooltip>
      </MenuItem>
    </MenuList>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        variant="persistent"
        className={classes.leftBarDrawer}
        open={isOpen}
        onClickAway={loadDrawerComponentsAction}
      >
        <DrawerItems items={items} classes={classes}
          // onDrag={handleItemDrag(setActiveItem)}
        />
        <Fragment></Fragment>
      </Drawer>
  </Fragment>
);

leftBar.propTypes = {
  classes: propTypes.object.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
};

export default leftBar;
