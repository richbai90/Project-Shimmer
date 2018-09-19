// import { connect } from "react-redux";
import { withStyles, Theme, createStyles, WithStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import CanvasComponent from "./Canvas";

export type CanvasStyles = WithStyles<typeof styles>

interface CanvasContainerProps extends CanvasStyles {}
const Canvas = (props : CanvasContainerProps ) => <CanvasComponent {...props} />;

// const mapStateToProps = ({ builder }) => ({
//   map: builder.page.componentMap,
//   tree: builder.page.componentTree
// });

const styles = (theme : Theme) => createStyles(({
  grow: {
    ...theme.helpers.grow
  },
  canvasBackground: {
    display: "flex",
    width: "100%",
    background: theme.palette.grey["300"],
    padding: theme.spacing.unit * 2,
    paddingBottom: "9vh",
    extend: "grow"
  },
  canvas: {
    extend: "grow",
    display: "flex"
  }
}));
export default compose<CanvasContainerProps, {}>(withStyles(styles))(Canvas);
