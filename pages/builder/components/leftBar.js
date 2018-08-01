// import Link from 'next/link';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreateIcon from '@material-ui/icons/Create';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import propTypes from 'prop-types';
// when an button is pressed, pops out with options, and title like "draw shape:"

const leftBar = ({
  classes,
}) => (
  <MenuList>
    <MenuItem>
      <ListItemIcon className={classes.icon}>
        <CreateIcon />
      </ListItemIcon>
    </MenuItem>
    <MenuItem>
      <ListItemIcon className={classes.icon}>
        <CropSquareIcon />
      </ListItemIcon>
    </MenuItem>
  </MenuList>
);

leftBar.propTypes = {
  classes: propTypes.object.isRequired,
};

export default leftBar;
