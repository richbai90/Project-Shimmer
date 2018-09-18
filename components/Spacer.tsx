import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { CSSProperties } from "react";
type SpacerProps = {
  classes: {
    root: string,
    spacer: string,
    clip: string
  },
  appBar?: boolean,
  clip?: boolean
};
const Spacer: React.SFC<SpacerProps> = ({
  classes,
  appBar,
  children,
  clip = false,
}) => (
  <div
    className={`${(appBar && classes.spacer) || ""} ${clip && classes.clip}`}
  >
    {children}
  </div>
);

const styles = (theme : Theme) => {
  const { toolbar } = theme.mixins;
  return createStyles({
    root: {
      ...theme.helpers.vh100,
      ...theme.helpers.vw100
    },
    spacer: {
      extend: "root",
      paddingTop: toolbar.minHeight,
      [theme.breakpoints.up("sm")]: {
        paddingTop: (toolbar[theme.breakpoints.up("sm")]! as CSSProperties).minHeight
      }
    },
    clip: {
      overflow: "hidden"
    }
  });
};
export default withStyles(styles)(Spacer);
