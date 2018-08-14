import ReactJsonSchema from 'react-json-schema';
import { withStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import RootRef from '@material-ui/core/RootRef';
import KdTree from './kdTree';

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
const withDynamicContent = (
  map,
  styles = {},
  inCanvas = false,
) => (Component) => {
  const canvasStyles = {
    ...styles,
    canvasDrawer: { position: 'relative', height: '100%' },
  };
  class WithDynamicContent extends React.Component {
    constructor(props) {
      super(props);
      this.dynamicContent = null;
      this.schemaParser = new ReactJsonSchema();
      // save our refs for the KdTree
      this._refs = [];
      if (inCanvas) this.kdTree = new KdTree([], (a, b) => ((a.x - b.x) ** 2) + ((a.y - b.y) ** 2), ['x', 'y']);
    }

    static propTypes = {
      classes: propTypes.object.isRequired,
    };

    componentWillMount() {
      if (!map) return;
      let component;
      if (typeof map.component !== 'function') {
        component = this.prepForRender(component, inCanvas);
      } else {
        component = this.prepForRender(
          map.component(this.props.classes),
          inCanvas,
          false,
        );
      }

      this.dynamicContent = this.schemaParser.parseSchema(component);
    }

    componentDidMount() {
      const getTopLeft = elem => (
        { x: elem.getBoundingClientRect().left, y: elem.getBoundingClientRect().top }
      );
      const getBottomRight = elem => (
        { x: elem.getBoundingClientRect().right, y: elem.getBoundingClientRect().bottom }
      );
      this._refs.forEach((ref) => {
        this.kdTree.insert({ ...getTopLeft(ref[0].current), tree: { ...ref[1] }, ref: ref[0] });
        this.kdTree.insert({ ...getBottomRight(ref[0].current), tree: { ...ref[1] }, ref: ref[0] });
      });
      // for debugging purposes only
      window.kd = this.kdTree;
    }

    prepForRender(treeSegment, renderInCanvas = false, parseStyles = true, parent = null) {
      const isRootRef = ({ component }) => (component.name || component.componentName || '').toLowerCase() === 'rootref';
      const isDrawer = ({ component }) => {
        const name = (component.name || component.componentName || '');
        return name.toLowerCase() === 'drawer' || (name.toLowerCase() === 'withstyles' && component.displayName === 'WithStyles(Drawer)');
      };
      const needsRef = () => !treeSegment.button;

      if (Array.isArray(treeSegment)) {
        return treeSegment.map(
          segment => this.prepForRender(segment, renderInCanvas, parseStyles, parent),
        );
      }

      let preppedTree;
      /*
       If we are rendering in the canvas then we are building a new page. In the which case
       we need to get access to the underlying DOM element of every Component rendered on the page.
       This is so we can get our bounding rectangles for our kd-tree. This is what allows us to know
       where to render a particular child in relation to the rest of the elements on the screen
      */

      if (renderInCanvas && !isRootRef(treeSegment) && needsRef()) {
        const ref = React.createRef();
        // wrap every component in a ref so that we can get the bounding rectangle
        preppedTree = {
          parent: Array.isArray(parent) ? parent : [parent],
          component: RootRef,
          rootRef: ref,
          className: '',
          children: {
            className: '',
            ...treeSegment,
          },
        };
        // if we have a root ref parse this again so we can get its children
        this.prepForRender(preppedTree, renderInCanvas, parseStyles, preppedTree.children);
        this._refs.push([ref, preppedTree]);
        // Base Case
        return preppedTree;
      }

      preppedTree = renderInCanvas && needsRef() ? treeSegment.children : treeSegment;
      preppedTree.parent = parent;

      if (
        isDrawer(preppedTree) && renderInCanvas
      ) {
        preppedTree.classes = { paper: this.props.classes.canvasDrawer };
      }

      if (preppedTree.classNames && parseStyles) {
        preppedTree.className = preppedTree.classNames
          .map(name => this.props.classes[name])
          .join(' ');
        delete preppedTree.classNames;
      }

      // recursively check all children for components that need special handling
      // Only if the parent needs ref. Otherwise do nothing
      // Base Case
      if (preppedTree.children && (needsRef() || parseStyles)) {
        preppedTree.children = this.prepForRender(
          preppedTree.children,
          renderInCanvas,
          parseStyles,
          parent,
        );
      }

      return preppedTree;
    }

    render() {
      if (Component === Fragment) {
        return <Component>{this.dynamicContent}</Component>;
      }
      return <Component dynamicContent={this.dynamicContent} />;
    }
  }
  return withStyles(canvasStyles)(WithDynamicContent);
};

export default withDynamicContent;
