import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default ({ classes, linker: Link }) => (
  <div className={classes.root}>
    <Typography variant="display1" gutterBottom>
      Material-UI
    </Typography>
    <Typography variant="subheading" gutterBottom>
      example project
    </Typography>
    <Typography gutterBottom>
      <Link href="/about">
        <a>Go to the about page</a>
      </Link>
      <Link href="/builder">
        <a>Builder Page</a>
      </Link>
    </Typography>
    <Typography gutterBottom>
      <Link href="/login">
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </Link>
    </Typography>
    <Button variant="contained" color="secondary">
      Do Nothing
    </Button>
  </div>
);
