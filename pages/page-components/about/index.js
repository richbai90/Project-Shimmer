import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default ({ classes }) => (
  <div className={classes.root}>
      <Typography variant="display1" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subheading" gutterBottom>
        about page
      </Typography>
      <Typography gutterBottom>
        <Link href="/">
          <a>Go to the main page</a>
        </Link>
      </Typography>
      <Button variant="contained" color="primary">
        Do nothing button
      </Button>
    </div>
);
