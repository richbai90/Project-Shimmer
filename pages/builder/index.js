/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { loadTemplate } from './redux/actions/templates';
import ToolBar from './components/ToolBar';
import Canvas from './components/Canvas';
import PropsBar from './components/PropsBar';


class BuilderPage extends React.Component {
  static getInitialProps() {
    const buttons = [
      {
        text: 'New',
        key: 'AppBarNew',
        icon: 'AddBoxIcon',
        title: 'add_box',
        click: loadTemplate('withLeftMenu'),
      },
      {
        text: 'Save',
        key: 'AppBarSave',
        icon: 'SaveIcon',
        title: 'save',
      },
      {
        text: 'Copy',
        key: 'AppBarCopy',
        icon: 'FileCopyIcon',
        title: 'file_copy',
      },
      {
        text: 'Delete',
        key: 'AppBarDelete',
        icon: 'DeleteIcon',
        title: 'delete',
      },
      {
        text: 'Undo',
        key: 'AppBarUndo',
        icon: 'UndoIcon',
        title: 'undo',
      },
      {
        text: 'Redo',
        key: 'AppBarRedo',
        icon: 'RedoIcon',
        title: 'redo',
      },
    ];
    return {
      appBar: {
        buttons,
        label: 'Page Builder',
      },
      spacer: {
        clip: true,
      },
    };
  }

  render() {
    const {
      classes,
      activeItem,
    } = this.props;
    return (
      <div className={classes.root}>
        <ToolBar />
        <Canvas />
        <PropsBar activeItem={activeItem}/>
      </div>
    );
  }
}

BuilderPage.propTypes = {
  classes: PropTypes.object.isRequired,
  activeItem: PropTypes.object,
};

const styles = theme => ({
  root: {
    display: 'flex',
    ...theme.helpers.vh100,
  },
});

export default compose(
  withStyles(styles),
  // this page is ready for DnD
  DragDropContext(HTML5Backend),
)(BuilderPage);
