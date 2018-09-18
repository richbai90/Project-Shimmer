import Drawer from "@material-ui/core/Drawer";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { CustomDrawerProps } from ".";

const CustomDrawer : React.SFC<CustomDrawerProps & {isserver: boolean;}> = ({ onClickAway, isserver, children, ...rest }) =>
  isserver ? null : (
    <ClickAwayListener onClickAway={onClickAway}>
      <Drawer {...rest }>{children}</Drawer>
    </ClickAwayListener>
  );

  export default CustomDrawer;
