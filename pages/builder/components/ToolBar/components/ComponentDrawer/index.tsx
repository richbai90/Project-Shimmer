import { Component } from "react";
import componentDefinitions from '../../componentDefinitions'
import ComponentDrawer from './ComponentDrawer';
import styles, { ToolbarStyles } from "./styles";
import { withStyles } from "@material-ui/core";

interface ComponentDrawerState {
  portalFilter: string;
  portalOpen: boolean;
  portalItems: typeof componentDefinitions;
}

class ComponentDrawerContainer extends Component<{classes: ToolbarStyles}> {
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
    return <ComponentDrawer
      portalFilter={this.state.portalFilter}
      classes={this.props.classes}
      componentsToRender={this.state.portalItems}
     />
  }
}

export default withStyles(styles)(ComponentDrawerContainer)