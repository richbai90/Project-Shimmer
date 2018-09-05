import { Fragment } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
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
    { title: 'Pages', value: 'pages', icon: <TocIcon/> },
    { title: 'Page Properties', value: 'properties', icon: <SettingsIcon/> },
    { title: 'Components', value: 'add', icon: <WidgetIcon/> },
    // { title: 'Tables', value: 'tables', icon: <TableChartIcon/> },
    // { title: 'Buttons', value: 'buttons', icon: <PlayCircleFilledIcon/> },
  ];
  return (
    <Fragment>
      {listItems.map((listItem) => {
        const { title, value, icon } = listItem;
        if (value === filterValue) {
          return (
                <Tooltip title={title} placement="right">
                  <ListItemIcon
                    className={ `${classes.highlightTool} ${classes.icon}` }
                    onClick={handleMenuClick(loadComponentDetailsAction, value)}
                  >
                    {icon}
                  </ListItemIcon>
                </Tooltip>
          );
        }
        return (
            <Tooltip title={title} placement="right">
              <ListItemIcon
               className={ `${classes.inactiveTool} ${classes.icon}` }
               onClick={handleMenuClick(loadComponentDetailsAction, value)}
              >
                {icon}
              </ListItemIcon>
            </Tooltip>
        );
      })}
    </Fragment >
  );
};

export default ToolBarItems;
