/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { loadTemplate } from './redux/actions/templates';
import ToolBar from './components/ToolBar';
import Canvas from './components/Canvas';

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
        // click: () => console.log('hello'),
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
      </div>
    );
  }
}

BuilderPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
    ...theme.helpers.vh100,
  },
});

export default withStyles(styles)(BuilderPage);
