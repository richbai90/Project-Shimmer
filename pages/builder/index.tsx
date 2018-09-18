/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// import { loadTemplate } from './redux/actions/templates';
import ToolBar from './components/ToolBar';
import Canvas from './components/Canvas';
import PropsBar from './components/PropsBar';

interface BuilderPageProps {
  classes: {
    root: string;
  }
}

class BuilderPage extends React.Component<BuilderPageProps> {
  static getInitialProps() {
    const buttons = [
      {
        text: 'New',
        key: 'AppBarNew',
        icon: 'AddBoxIcon',
        title: 'add_box',
        // click: loadTemplate('withLeftMenu'),
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
    } = this.props;
    return (
      <div className={classes.root}>
        <ToolBar />
        <Canvas />
        <PropsBar />
      </div>
    );
  }
}

const styles = (theme : Theme) => createStyles({
  root: {
    display: 'flex',
    ...theme.helpers.vh100,
  },
});

export default compose<BuilderPageProps, {}>(
  withStyles(styles),
  // this page is ready for DnD
  DragDropContext(HTML5Backend),
)(BuilderPage);
