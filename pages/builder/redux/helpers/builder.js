import ReactJsonSchema from 'react-json-schema';
import { withStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import propTypes from 'prop-types';

/**
 * React HOC for loading dynamic content with styles.
 * Usage: withDynamicContent(map, [styles : {}], [inCanvas : boolean] )(Component);
 * If component is a Fragment, the map will be rendered as children of the Fragment
 * Otherwise it will be passed as a dynamicContent property
 * @param map: Object
 * @param styles: Object
 * @param inCanvas: boolean
 * @return (Component) => HOC
 */
export const withDynamicContent = (map, styles = {}, inCanvas = false) => ((Component) => {
  const canvasStyles = { ...styles, canvasDrawer: { position: 'relative', height: '100%' } };
  class WithDynamicContent extends React.Component {
   propTypes = {
     classes: propTypes.object.isRequired,
   };

    dynamicContent = null;

    schemaParser = new ReactJsonSchema();

    componentWillMount() {
      if (!map) return;
      let component;
      if (typeof map.component !== 'function') {
        component = this.prepForRender(component, inCanvas);
      } else {
        component = this.prepForRender(map.component(this.props.classes), inCanvas, false);
      }
      this.dynamicContent = this.schemaParser.parseSchema(component);
    }

    prepForRender(treeSegment, renderInCanvas = false, parseStyles = true) {
      if (Array.isArray(treeSegment)) {
        return treeSegment.map(segment => this.prepForRender(segment, renderInCanvas, parseStyles));
      }

      const preppedTree = { className: '', componentName: '', ...treeSegment };
      if (preppedTree.componentName.toLowerCase() === 'drawer' && renderInCanvas) {
        preppedTree.classes = { paper: this.props.classes.canvasDrawer };
        delete preppedTree.componentName;
      }

      if (preppedTree.classNames && parseStyles) {
        preppedTree.className = preppedTree.classNames.map(name => this.props.classes[name]).join(' ');
        delete preppedTree.classNames;
      }

      // recursively check all children for components that need special handling
      if (preppedTree.children) {
        preppedTree.children = this.prepForRender(preppedTree.children, renderInCanvas, parseStyles);
      }

      return preppedTree;
    }

    render() {
      if (Component === Fragment) {
        return <Component>{ this.dynamicContent }</Component>;
      }
      return <Component dynamicContent={this.dynamicContent} />;
    }
  }
  return withStyles(canvasStyles)(WithDynamicContent);
});
