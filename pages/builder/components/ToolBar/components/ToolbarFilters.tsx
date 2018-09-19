import { Fragment } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import TocIcon from "@material-ui/icons/Toc";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import WidgetIcon from "@material-ui/icons/Widgets";
import { ToolbarStyles } from "../styles";

/* TODO: need to set up toolBarfilter for this condidtional highligning to work
   future: set this up so that these three buttons actually filter through the toolbar,
   maybe have an expandable menu for their children?
*/

interface ToolbarFilterProps {
  classes: ToolbarStyles;
  filterValue: string;
}

// TODO 09/19/2018 Rich Baird : Fix all of this
// const handleMenuClick = (clickHandler : (filterValue : string) => void, filterValue : string) => () => {
//   clickHandler(filterValue);
// };

const ToolbarFilters : React.SFC<ToolbarFilterProps> = ({ classes, filterValue }) => {
  const listItems = [
    { title: "Pages", value: "pages", icon: <TocIcon />, position: 0 },
    {
      title: "Page Properties",
      value: "properties",
      icon: <SettingsIcon />,
      position: 0
    },
    { title: "Components", value: "add", icon: <WidgetIcon />, position: 0 }
  ];
  return (
    <Fragment>
      {listItems.map(listItem => {
        const {
          // title,
          value,
          icon
        } = listItem;
        return (
          <MenuItem
            // onClick={handleMenuClick(loadComponentDetailsAction, value)}
            className={`${
              value === filterValue
                ? classes.highlightTool
                : classes.inactiveTool
            } ${classes.allMenuItems}`}
          >
            <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
          </MenuItem>
        );
      })}
    </Fragment>
  );
};
export default ToolbarFilters;
