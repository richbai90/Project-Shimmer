import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Toolbar from './Toolbar';
import componentDefinitions from './componentDefinitions'
import toolbarStyles, { ToolbarStyles } from './styles'

interface ToolbarState {
  componentDrawerFilter: string;
  portalOpen: boolean;
  filteredComponents: typeof componentDefinitions;
  activeItem: string;
}

interface ToolbarContainerProps {classes: ToolbarStyles}

class ToolbarContainer extends Component<ToolbarContainerProps> {
  state : ToolbarState = {
    componentDrawerFilter: '',
    portalOpen: false,
    filteredComponents: [],
    activeItem: '',
  };

  toggleComponentDrawer(componentDrawerFilter : string ) {
    const filteredComponents = componentDefinitions.filter(
      definition => definition.value === componentDrawerFilter,
    );
    this.setState({ componentDrawerFilter, portalOpen: true, filteredComponents });
  }

  render() {
    return (
      <Toolbar
        classes={this.props.classes}
        activeItem={this.state.activeItem}
        portalOpen={this.state.portalOpen}
        filteredComponents={this.state.filteredComponents}
        componentDrawerFilter={this.state.componentDrawerFilter}
        toggleComponentDrawer={ ( filter : string ) => () => this.toggleComponentDrawer(filter) }
      />
    );
  }
}

export default compose<ToolbarContainerProps, {}>(
  withStyles(toolbarStyles),
)(ToolbarContainer);
