// import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


import FormControl from '@material-ui/core/FormControl';



import CreateIcon from '@material-ui/icons/Create';

import CropSquareIcon from '@material-ui/icons/CropSquare';
import FormatSizeIcon from '@material-ui/icons/FormatSize';


import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';


// when an button is pressed, pops out with options, and title like "draw shape:"



export default ({
  classes,
}) => (
  <MenuList>
    <MenuItem>
      <ListItemIcon className={classes.icon}>
        <CreateIcon
          value={
        />
      </ListItemIcon>
    </MenuItem>
    <MenuItem>
      <ListItemIcon className={classes.icon}>
        <CropSquareIcon
          value={drawSquare}
          onClick={handleMenuItemClick}
        />
      </ListItemIcon>
    </MenuItem>
    {/*
      <MenuItem>
      <InputLabel>Shapes</InputLabel>
      <Select>
        <MenuItem>Elipse</MenuItem>
        <MenuItem>Line</MenuItem>
      </Select>
    </MenuItem>
    <MenuItem>
      <ListItemIcon className={classes.icon}>
        <FormatSizeIcon/>
      </ListItemIcon>
      <InputLabel>Input Fields</InputLabel>
      <Select>
        <MenuItem>Text Box</MenuItem>
        <MenuItem>Multiline Text</MenuItem>
        <MenuItem>Select Box</MenuItem>
      </Select>
    </MenuItem>
    <MenuItem> Lables </MenuItem>
    <MenuItem> Button </MenuItem>
    <MenuItem> Table </MenuItem>
    <Divider/>
    <MenuItem> Chart </MenuItem>
    <MenuItem> Tabs Control </MenuItem>
    <MenuItem> Tabs </MenuItem>
    <MenuItem> Image </MenuItem>
      <InputLabel>Etc</InputLabel>
         <Select>
           <MenuItem>Url Link</MenuItem>
           <MenuItem>Image</MenuItem>
           <MenuItem>File List</MenuItem>
         </Select>
    */}
  </MenuList>
);
