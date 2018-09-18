import { Component } from "react";
import componentDefinitions from '../../componentDefinitions'
import ComponentDrawerComponent from './ComponentDrawer';
import { ToolbarStyles } from "./styles";

interface ComponentDrawerState {
  portalFilter: string;
  portalOpen: boolean;
  portalItems: typeof componentDefinitions;
}

class ComponentDrawer extends Component<{classes: ToolbarStyles}> {
  setPortalFilter(portalFilter : string) {
    this.setState({ portalFilter, portalOpen: true });
  }
  
  setPortalExistance(portalOpen : boolean) {
    this.setState({ portalOpen });
  }
  
  updatePortalItems(items : typeof componentDefinitions) {
    this.setState({ portalItems: items });
  }

  state : ComponentDrawerState = {
    portalFilter: '',
    portalOpen: false,
    portalItems: [],
  };

  render() {
    return <ComponentDrawerComponent
      portalFilter={this.state.portalFilter}
      classes={this.props.classes}
      componentsToRender={this.state.portalItems}
     />
  }
}