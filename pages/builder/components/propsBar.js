// import Link from 'next/link';
import propTypes from 'prop-types';
import { Fragment }  from 'react';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const PropsBar = ({ classes }) => (
  <div className={classes.rightBar}>
    <Table>
      <Typography>
        Properties&nbsp;Table
      </Typography>
      <TableBody>
        <TableRow/>
        <TableRow>
          Object&nbsp;Name:
          <TextField/>
        </TableRow>
        <TableRow>
          Data&nbsp;Association:
          <TextField/>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

PropsBar.propTypes = {
  classes: propTypes.shape({
    root: propTypes.string,
  }),
};

export default PropsBar;
