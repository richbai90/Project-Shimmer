import { Fragment } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
// import Tooltip from '@material-ui/core/Tooltip';
import TocIcon from '@material-ui/icons/Toc';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import WidgetIcon from '@material-ui/icons/Widgets';

const handleMenuClick = (clickHandler, filterValue) => () => {
  clickHandler(filterValue);
};

const ToolBarItems = ({
  classes,
  loadComponentDetailsAction,
  filterValue,
  isOpen
}) => {
  const listItems = [
    { title: 'Pages', value: 'pages', icon: <TocIcon/>, position: 0 },
    { title: 'Page Properties', value: 'properties', icon: <SettingsIcon/>, position: 0 },
    { title: 'Components', value: 'add', icon: <WidgetIcon/>, position: 0 },
    // { title: 'Tables', value: 'tables', icon: <TableChartIcon/> },
    // { title: 'Buttons', value: 'buttons', icon: <PlayCircleFilledIcon/> },
  ];
  return (
    <Fragment>
      {listItems.map((listItem) => {
        const {
          // title,
          value,
          icon,
          // position
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

export default ToolBarItems;
