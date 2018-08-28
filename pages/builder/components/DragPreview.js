
// import state, if item is dragging get height & width of draggable item.
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  fragment: {
    height: '25px',
    width: '25px',
    position: 'relative',
    xOffset: '500px',
    yOffset: '500px',
    zIndex: theme.zIndex.appBar + 5,
  },
});

export default ({
  classes,
  dragging,
}) => (
  <Paper style={styles.fragment}>
    Paper
    {
      dragging === true
        ? <Paper style={styles.fragment}>
          Preview: Dragging is true
          </Paper>
        : <Paper style={styles.fragment}>
          Preview Dragging is False
          </Paper>
    }
  </Paper>
);
