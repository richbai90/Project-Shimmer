// import Link from 'next/link';
import { Fragment, PropTypes } from 'react';
import propTypes from 'prop-types';
// import Drawer from '@root/components/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import shortid from 'shortid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Portal from '@material-ui/core/Portal';
import CreateIcon from '@material-ui/icons/Create';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DraggableItem from './DraggableItem';
import { RadioButtonBlue, TriangleRightPointing } from './custom_icons/CustomIcons';

const handleMenuClick = (clickHandler, filterValue) => () => {
  clickHandler(filterValue);
};
const handleItemClick = (clickHandler, itemID) => () => { clickHandler(itemID); };
const handleDragStart = (clickHandler, itemID, dragging) => (
  (e) => { clickHandler(itemID, dragging); }
);
const handleDragEnd = (clickHandler, itemID, dragging) => (
  (e) => {
    console.log('words line 52');
    const infoID = `${itemID}, ${e.target.clientHeight}, ${e.target.clientWidth}`;
    console.log('infoID: ', infoID);
    clickHandler(itemID, dragging);
  }
);

const MenuListItems = ({
  classes,
  loadComponentDetailsAction,
  filterValue,
  isOpen
}) => {
  const listItems = [
    { title: 'Shapes', value: 'shapes', icon: <CropSquareIcon/> },
    { title: 'Text', value: 'text', icon: <TextFormatIcon/> },
    { title: 'Input Fields', value: 'inputFields', icon: <FormatShapesIcon/> },
    { title: 'Tables', value: 'tables', icon: <TableChartIcon/> },
    { title: 'Buttons', value: 'buttons', icon: <PlayCircleFilledIcon/> },
  ];
  return (
    <Grid container style={{ padding: 0, margin: 0 }}>
      {listItems.map((listItem) => {
        const { title, value, icon } = listItem;
        if (value === filterValue) {
          return (
            <Fragment>
              < Grid item
                className={ classes.highlightTool }
                onClick={handleMenuClick(loadComponentDetailsAction, value)}
              >
                <Tooltip title={title} placement="right">
                  <ListItemIcon className={ classes.icon }>
                    {icon}
                  </ListItemIcon>
                </Tooltip>
                { isOpen
                  ? <div className={classes.cssTriangle} ></div>
                  : null
                }
              </Grid>
            </Fragment >
          );
        }
        return (
          < Grid item
            className={ classes.inactiveTool }
            onClick={handleMenuClick(loadComponentDetailsAction, value)}
          >
            <Tooltip title={title} placement="right">
              <ListItemIcon className={ classes.icon } >
                {icon}
              </ListItemIcon>
            </Tooltip>
          </Grid>
        );
      })}
    </Grid >
  );
};

const PortalItems = ({
  items,
  classes,
  selectActiveItem,
  activeItem
}) => (
  <div>
    <Grid className={classes.portal}>
    {items.map((item) => {
      const { name, value, id } = item;
      if (value === 'heading') {
        return (
          <div>
            < Typography
              key={shortid.generate()}
              style={{ backgroundColor: '#ffab00', color: 'white', paddingTop: '8px' }}
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
            < Typography key={shortid.generate()} className={classes.subheader}>
              {name}
            </Typography>
          </div>
        );
      }
      return (
        < Grid container
          style={{ justifyContent: 'space-between', height: '50px' }}
          draggable
          name={name}
          value={value}
          id={value}
          key={shortid.generate()}
        >
          <Grid item style={{ margin: 'auto 0 0 0' }} >
            <Typography>{name}</Typography>
          </Grid>
          < Grid item style={{ margin: 'auto 8px 2px 0' }} >
            < DraggableItem
              className={classes.item}
              id={id}
              key={id}
              name={name}
              classes={classes}
              onClick={handleItemClick(selectActiveItem, id)}
              onDragStart={handleDragStart(selectActiveItem, id, true)}
              onDragEnd={handleDragEnd(selectActiveItem, id, false)}
            />
          </Grid>
        </Grid>
      );
    })}
    </Grid>
  </div>
);


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    dragging: monitor.dragging(),
  };
}

PortalItems.propTypes = {
  // connectDragSource: PropTypes.func,
  // connectDragPreview: PropTypes.func,
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
  // setActiveItem = null,
  items = null,
  isOpen = false,
  selectActiveItem,
  filterValue,
}) => {
  return (
    <ClickAwayListener onClickAway={closeComponentDetailsAction}>
      <MenuList className={classes.toolBar}>
        <MenuListItems
          isOpen={isOpen}
          filterValue={filterValue}
          classes={classes}
          loadComponentDetailsAction = {loadComponentDetailsAction}
        />
      < div
        ref={(ref) => { container = ref; }}
        className={classes.portalContainer}
      />
      { isOpen && container ? (
        < Portal
          className={classes.portal}
          container={container}
        >
          < PortalItems
            className={classes.drawerItems}
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
};

ToolBar.propTypes = {
  classes: propTypes.object.isRequired,
  loadComponentDetailsAction: propTypes.func.isRequired,
  closeComponentDetailsAction: propTypes.func.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
  isOpen: propTypes.bool.isRequired,
};

export default ToolBar;
