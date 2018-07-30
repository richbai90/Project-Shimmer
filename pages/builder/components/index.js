// import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ActionMenu from './actionMenu';
import LeftBar from './leftBar';
import Canvas from './canvas';
import PropsBar from './propsBar';

export default ({
  classes,
  componentMap,
  componentTree,
  templates,
  loadingTemplates,
}) => (
  <div>
    <AcitonMenu/>
    <LeftBar/>
    <Canvas/>
    <PropsBar/>
  </div>
);
