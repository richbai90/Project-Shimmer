// import Link from 'next/link';
import {
  Fragment,
  // PropTypes,
} from 'react';
import propTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Tooltip from '@material-ui/core/Tooltip';
import shortid from 'shortid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Portal from '@material-ui/core/Portal';
// import CreateIcon from '@material-ui/icons/Create';

import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ToolBarItems from './components/ToolBarItems';
import PortalItem from './components/PortalItem';

// import { RadioButtonBlue, TriangleRightPointing } from './custom_icons/CustomIcons';

const handleMenuClick = (clickHandler, filterValue) => () => {
  clickHandler(filterValue);
};
const handleItemClick = (clickHandler, itemID) => () => { clickHandler(itemID); };
const handleDragStart = (clickHandler, itemID, dragging) => (
  (e) => {
    clickHandler(itemID, dragging);
  }
);
const handleDragEnd = (clickHandler, itemID, dragging) => (
  (e) => {
    clickHandler(itemID, dragging);
  }
);

const MenuListItems = ({
  classes,
  loadComponentDetailsAction,
  filterValue,
}) => {
  const listItems = [
    { title: 'Layout', value: 'layout', icon: <CropSquareIcon/> },
    { title: 'Forms', value: 'forms', icon: <FormatShapesIcon/> },
    { title: 'Text and Labels', value: 'text', icon: <TextFormatIcon/> },
    { title: 'Charts', value: 'charts', icon: <TableChartIcon/> },
    // { title: 'Image', value: 'image', icon: <TableChartIcon/> },
    { title: 'Buttons', value: 'buttons', icon: <PlayCircleFilledIcon/> },
  ];
  return (
    <Fragment >
      {listItems.map((listItem) => {
        const {
          value,
          icon,
        } = listItem;
        return (
          <MenuItem
            onClick={handleMenuClick(loadComponentDetailsAction, value)}
            className={`${(value === filterValue ? classes.highlightTool : classes.inactiveTool)} ${classes.allMenuItems}`}
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
  loadComponentDetailsAction: propTypes.func,
  isOpen: propTypes.bool,
  filterValue: propTypes.string,
  classes: propTypes.object,
};

const PortalItems = ({
  items,
  classes,
  selectActiveItem,
  // activeItem,
}) => (
  <div className={classes.portal}>
      {items.map((item) => {
        const {
          name,
          value,
          id,
        } = item;
        if (value === 'heading') {
          return (
            <div className={classes.portalHeader} key={shortid.generate()} >
              <div
                className={classes.cssTriangle}></div>
              < Typography
                style={{ paddingTop: '8px' }}
                className={classes.header}
                id={value}
              >
                {name}
              </Typography>
            </div>
          );
        }
        if (value === 'subheading') {
          return (
            <div>
              <Divider/>
              < Typography
                key={shortid.generate()}
                variant="subheading"
                className={classes.subheader}
              > {name}
              </Typography>
              <Divider/>
            </div>
          );
        }
        return (
          < Grid container
            style = {{
              height: 'fitContent',
              padding: '4px',
            }}
            draggable
            name={name}
            value={value}
            id={value}
            key={shortid.generate()}
            onClick={handleItemClick(selectActiveItem, id)}
            onDragStart={handleDragStart(selectActiveItem, id, true)}
            onDragEnd={handleDragEnd(selectActiveItem, id, false)}
          >
            < PortalItem
              id={id}
              key={id}
              name={name}
              value={value}
              classes={classes}
              onClick={handleItemClick(selectActiveItem, id)}
              onDragStart={handleDragStart(selectActiveItem, id, true)}
              onDragEnd={handleDragEnd(selectActiveItem, id, false)}
              style={{ maxHeightheight: 'fitContent' }}
            />
          </Grid>
        );
      })}
  </div>
);

PortalItems.propTypes = {
  selectActiveItem: propTypes.func,
  activeItem: propTypes.string,
  filterValue: propTypes.string,
  classes: propTypes.object,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
      key: propTypes.string,
    }),
  ),
};

let container;
const ToolBar = ({
  activeItem = '',
  classes,
  loadComponentDetailsAction,
  closeComponentDetailsAction,
  items = null,
  isOpen = false,
  selectActiveItem,
  filterValue,
}) => (
  <ClickAwayListener onClickAway={closeComponentDetailsAction}>
    <MenuList className={classes.toolBar}>
      <ToolBarItems
        isOpen={isOpen}
        filterValue={filterValue}
        classes={classes}
        loadComponentDetailsAction = {loadComponentDetailsAction}
      />
      <MenuListItems
        isOpen={isOpen}
        filterValue={filterValue}
        classes={classes}
        loadComponentDetailsAction = {loadComponentDetailsAction}
      />
    < div
      style={{
        marginTop: ((items.length > 0) && (items[0].position !== 'undefined') ? `${(items[0].position * 48) + 144}px` : 0),
      }}
      ref={(ref) => { container = ref; }}
      className={classes.portalContainer}
    />
    { isOpen ? (
      < Portal
        container={container}
      >
        < PortalItems
          selectActiveItem = {selectActiveItem}
          activeItem = {activeItem}
          items={items}
          classes={classes}
        />
      </Portal>
    ) : null }
    </MenuList>
  </ClickAwayListener>
);


ToolBar.propTypes = {
  selectActiveItem: propTypes.func,
  filterValue: propTypes.string,
  activeItem: propTypes.object,
  setActiveItem: propTypes.func,
  classes: propTypes.object.isRequired,
  loadComponentDetailsAction: propTypes.func.isRequired,
  closeComponentDetailsAction: propTypes.func.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
  isOpen: propTypes.bool,
};

export default ToolBar;
