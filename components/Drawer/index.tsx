import { Component } from "react";
import DrawerComponent from "./Drawer";
import { DrawerProps } from "@material-ui/core/Drawer";
import { ClickAwayListenerProps } from "@material-ui/core/ClickAwayListener";
interface DrawerState {
  isServer: boolean;
};

export type CustomDrawerProps = DrawerProps & ClickAwayListenerProps;
export default class Drawer extends Component<CustomDrawerProps, DrawerState> {
  state = {
    isServer: true
  };
  componentDidMount() {
    // component is mounted once the client has taken over the rendering process
    this.setState({
      isServer: false
    });
  }
  render() {
    const { children = [], ...props } = this.props;
    return (
      <DrawerComponent
        {...props}
        isserver={this.state.isServer && !this.props.open}
      >
        {children}
      </DrawerComponent>
    );
  }
}
