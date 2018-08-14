import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import {Fragment} from 'react';

// const Preview = () => {
//   <Fragment>
//   blah
//   <Fragment/>
// }

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
