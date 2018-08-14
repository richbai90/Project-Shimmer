import { Component } from 'react';
import DrawerComponent from './Drawer';

export default class Drawer extends Component {
  state = {
    isServer: true,
  };

  componentDidMount() {
    // component is mounted once the client has taken over the rendering process
    this.setState({
      isServer: false,
    });
  }

  render() {
    const {
      children = [],
      ...props
    } = this.props;
    return (
      <DrawerComponent {...props} isserver={this.state.isServer && !this.props.open}>
        {children}
      </DrawerComponent>
    );
  }
}
