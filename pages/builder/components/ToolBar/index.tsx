import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Toolbar from './Toolbar';
import componentDefinitions from './componentDefinitions'
import toolbarStyles, { ToolbarStyles } from './styles'
import { CategoryValues } from './components/Categories';

interface ToolbarState {
  componentDrawerFilter: CategoryValues;
  portalOpen: boolean;
  filteredComponents: typeof componentDefinitions;
  activeItem: string;
}

interface ToolbarContainerProps {classes: ToolbarStyles}

class ToolbarContainer extends Component<ToolbarContainerProps, ToolbarState> {
  state = {
    componentDrawerFilter: '' as CategoryValues,
    portalOpen: false,
    filteredComponents: [],
    activeItem: '',
  };

  toggleComponentDrawer(componentDrawerFilter : CategoryValues ) {
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
        toggleComponentDrawer={ ( filter : CategoryValues ) => () => this.toggleComponentDrawer(filter) }
      />
    );
  }
}

export default compose<ToolbarContainerProps, {}>(
  withStyles(toolbarStyles),
)(ToolbarContainer);
