import { Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TableChartIcon from '@material-ui/icons/TableChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { ToolbarStyles } from '../styles'

export type CategoryValues = 'layout'|'forms'|'text'|'charts'|'image'|'buttons'

interface CategoryProps {
  classes: ToolbarStyles;
  portalFilter : CategoryValues;
  setPortalFilter : (value : string) => void
}

const handlePortal = ( val : string, callback : (arg : string) => void) => () => {
  callback(val);
};

const Categories : React.SFC<CategoryProps> = ({
  classes,
  portalFilter,
  setPortalFilter,
}) => {
  const categories = [
    { title: 'Layout', value: 'layout', icon: <CropSquareIcon/> },
    { title: 'Forms', value: 'forms', icon: <FormatShapesIcon/> },
    { title: 'Text and Labels', value: 'text', icon: <TextFormatIcon/> },
    { title: 'Charts', value: 'charts', icon: <TableChartIcon/> },
    { title: 'Image', value: 'image', icon: <TableChartIcon/> },
    { title: 'Buttons', value: 'buttons', icon: <PlayCircleFilledIcon/> },
  ];

  return (
    <Fragment>
      {categories.map((listItem) => {
        const {
          value,
          icon,
        } = listItem;
        return (
          <MenuItem
            onClick={handlePortal(value, setPortalFilter)}
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

export default Categories;