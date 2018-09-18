import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import compose from "recompose/compose";
import AppBar from "./AppBar";
import { Dispatch, AnyAction } from "redux";
import { Component } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
type ActionMenuProps = {
  classes: {
    appBar: string;
    label: string;
    hidden: string;
  },
  buttons: {
    text: string;
    action?: (...args: any[]) => any
    click?: AnyAction;
    key?: string;
  }[],
  label: string,
  hidden: boolean,
  dispatch: Dispatch;
}

type DefaultProps = Readonly<Partial<ActionMenuProps>>

const defaultProps : DefaultProps = {
  buttons: [],
  hidden: false,
  label: ""
};

class ActionMenu extends Component<ActionMenuProps> {
  static defaultProps = defaultProps;
  render() {
    const { dispatch } =  this.props;
    const buttons = this.props.buttons.map(
      button =>
         button.click
          ? { ...button, click: () : AnyAction => dispatch({ ...button.click! }) }
          : button as {text: string; key?: string}
    );
    return <AppBar {...this.props} buttons={buttons} />;
  }
};
ActionMenu.defaultProps = {
  buttons: [],
  hidden: false,
  label: ""
};

const styles = (theme : Theme) => {
  const { gutters, toolbar } = theme.mixins;
  return createStyles({
    label: {
      ...toolbar,
      marginLeft: -1 * parseInt(gutters().paddingLeft as string),
      paddingLeft: gutters().paddingLeft,
      paddingRight: gutters().paddingRight,
      [theme.breakpoints.up("sm")]: {
        ...(toolbar as any)[theme.breakpoints.up("sm")],
        marginLeft: -1 * parseInt((gutters()[theme.breakpoints.up("sm")]! as CSSProperties).paddingLeft! as string)
      },
      background: theme.palette.primary.dark,
      color: theme.palette.common.white,
      display: "flex",
      alignItems: "center"
    },
    appBar: {
      justifyContent: "space-between",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white
    },
    hidden: {
      display: "none"
    }
  });
};
const mapStateToProps = () => ({});
export default compose<ActionMenuProps, {}>(withStyles(styles), connect(mapStateToProps))(
  ActionMenu
);
