/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withStyles, createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import Router from "src/routes";
import Home from "./components";

const { Link } = Router;

const styles = (theme : Theme) => createStyles({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20,
  }
});

interface Props extends WithStyles<typeof styles> {
    open: boolean,
};


class Index extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <Home
        classes={classes}
        linker={Link}
      />
    );
  }
}
export default compose<Props, {}>(
  withStyles(styles),
)(Index);
