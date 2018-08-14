import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default ({
  onClickAway,
  isserver,
  children,
  ...rest
}) => (
  isserver ? null : (
    <ClickAwayListener onClickAway={onClickAway} >
      <Drawer {...rest}>
        {children}
      </Drawer>
    </ClickAwayListener>
  )
);
