// import Link from 'next/link';
import propTypes from 'prop-types';

const PropsBar = ({ classes }) => (
  <div className={classes.root}>
    ASDF
  </div>
);

PropsBar.propTypes = {
  classes: propTypes.shape({
    root: propTypes.string,
  }),
};

export default PropsBar;
