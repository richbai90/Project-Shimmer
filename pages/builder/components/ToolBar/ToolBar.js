import { Fragment } from 'react';
import propTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Portal from '@material-ui/core/Portal';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ToolbarFilters from './components/ToolbarFilters';
import PortalComponent from './components/Portal';

const MenuListItems = ({
  classes,
  portalFilter,
  setPortalFilter,
}) => {
  const listItems = [
    { title: 'Layout', value: 'layout', icon: <CropSquareIcon/> },
    { title: 'Forms', value: 'forms', icon: <FormatShapesIcon/> },
    { title: 'Text and Labels', value: 'text', icon: <TextFormatIcon/> },
    { title: 'Charts', value: 'charts', icon: <TableChartIcon/> },
    { title: 'Image', value: 'image', icon: <TableChartIcon/> },
    { title: 'Buttons', value: 'buttons', icon: <PlayCircleFilledIcon/> },
  ];

  const handlePortal = val => () => {
    setPortalFilter(val);
  };

  return (
    <Fragment >
      {listItems.map((listItem) => {
        const {
          value,
          icon,
        } = listItem;
        return (
          <MenuItem
            onClick={handlePortal(value)}
            className={`${(value === portalFilter ? classes.highlightTool : classes.inactiveTool)} ${classes.allMenuItems}`}
          >
            <ListItemIcon className={classes.icon}>
              {icon}
            </ListItemIcon>
          </MenuItem>
        );
      })}
    </Fragment>
  );
};

MenuListItems.propTypes = {
  portalFilter: propTypes.string,
  setPortalFilter: propTypes.func,
  loadComponentDetailsAction: propTypes.func,
  portalOpen: propTypes.bool,
  classes: propTypes.object,
};

let container;

const Toolbar = ({
  activeItem = '',
  classes,
  portalOpen = false,
  selectActiveItem,
  portalFilter,
  setPortalFilter,
  setPortalExistance,
  portalItems,
  updatePortalItems,
}) => {
  const setPortal = bool => () => {
    setPortalExistance(bool);
  };
  console.log('portalItems: ', portalItems);
  console.log('setPortal: ', setPortal);

  return (
    <ClickAwayListener onClickAway={setPortal(false)}>
      <MenuList className={classes.toolBar}>
        <ToolbarFilters
          portalFilter={portalFilter}
          classes={classes}
          // onClick = {onClick}
        />
        <MenuListItems
          portalOpen={portalOpen}
          portalFilter={portalFilter}
          classes={classes}
          setPortalFilter = {setPortalFilter}
          setPortal={setPortal}
        />
      <div
        style={{ marginTop: ((portalItems.length > 0) && (portalItems[0].position !== 'undefined') ? `${(portalItems[0].position * 48) + 144}px` : 0) }}
        ref={(ref) => { container = ref; }}
        className={classes.portalContainer}
      />
        { portalOpen === true ? (
          <Portal container={container} >
            <PortalComponent
              selectActiveItem = {selectActiveItem}
              activeItem = {activeItem}
              classes={classes}
              portalFilter={portalFilter}
              updatePortalItems={updatePortalItems}
              portalItems={portalItems}
            />
          </Portal>
        ) : null }
      </MenuList>
    </ClickAwayListener>
  );
};

Toolbar.propTypes = {
  portalOpen: propTypes.bool,
  portalFilter: propTypes.string,
  setPortalFilter: propTypes.func,
  selectActiveItem: propTypes.func,
  activeItem: propTypes.object,
  classes: propTypes.object.isRequired,
  loadComponentDetailsAction: propTypes.func.isRequired,
  closeComponentDetailsAction: propTypes.func.isRequired,
  setPortalExistance: propTypes.func,
  updatePortalItems: propTypes.func,
  portalItems: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
      key: propTypes.string,
    }),
  ),
};

export default Toolbar;
