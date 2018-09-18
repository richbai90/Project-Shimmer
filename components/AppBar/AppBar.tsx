import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import shortid from "shortid";
import { AnyAction } from "redux";
type ActionMenuProps = {
  classes: {
    appBar: string,
    label: string
    hidden: string;
  },
  buttons?: {
    text: string,
    action?: (...args: any[]) => any
    click?: () => AnyAction;
    key?: string;
  }[],
  label?: string,
  hidden?: boolean
};
const ActionMenu: React.SFC<ActionMenuProps> = ({
  classes,
  buttons = [],
  hidden = false,
  label = ''
}) => (
  <AppBar className={`${classes.appBar} ${(hidden && classes.hidden) || ""}`}>
    <Toolbar>
      <div className={classes.label}>
        <Typography color="inherit">{label}</Typography>
      </div>
      {buttons.map(
        button =>
          button.click ? (
            <Button
              color="inherit"
              key={button.key || shortid.generate()}
              onClick={button.click}
            >
              {button.text}
            </Button>
          ) : (
            <Button color="inherit" key={button.key || shortid.generate()}>
              {button.text}
            </Button>
          )
      )}
    </Toolbar>
  </AppBar>
);

export default ActionMenu;
