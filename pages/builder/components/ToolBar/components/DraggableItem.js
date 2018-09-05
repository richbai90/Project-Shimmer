import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

// import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
  RadioButtonBlue,
  UploadFileButton,
  Trashcan,
  TrashcanCircle,
  DropdownMenuDetails,
  DropdownMenuSimple,
  SaveButton,
  DefaultButton,
} from '../custom_icons/CustomIcons';

const handleItemClick = (clickHandler, itemID) => () => {
  clickHandler(itemID);
};

const DraggableItem = ({
  selectActiveItem, name, id, classes,
}) => {
  switch (name) {
    case 'Card':
      return (
        < Paper
          style={{ height: '45px', width: '45px' }}
          onClick={handleItemClick(selectActiveItem, id)}
        > <PersonIcon style={{ width: '100%', height: '66%' }}/>
          <Divider/>
        </Paper>
      );
    case 'Paper':
      return (
        <Paper onClick={handleItemClick(selectActiveItem, id)}
          style={{ height: '45px', width: '45px' }}
        ><br/><br/><br/><br/></Paper>
      );
    case 'Line':
      return (
        <div>{name}</div>
      );
    case 'Textbox':
      return (
        <Typography
          id="texbox"
        >TextBox
        </Typography>
      );
    case 'Multiline':
      return (
        <Typography
          id="multiline-flexible"
          label="Multiline Textbox"
          margin = '0'
        >Multiline TextBox
        </Typography>
      );
    case 'Dropdown Menu':
      return (

        <div className={classes.cssTriangleDown}> &nbsp;</div>

      );
    case 'Radio Button':
      return (
        <div style={{ alignContent: 'center' }}>
          <RadioButtonBlue style={{ width: '20px', height: '50px' }}/>
          <Typography >{name}</Typography>
        </div>
      );
    case 'Checkbox':
      return (
        <Checkbox />
      );
    case 'Headline':
      return (
        <Typography variant="display2" gutterBottom>
          {name}
        </Typography>
      );
    case 'Title':
      return (
        <Typography variant="title" gutterBottom>
          {name}
        </Typography>
      );
    case 'Subheading':
      return (
        <Typography variant="subheading" gutterBottom>
          {name}
        </Typography>
      );
    case 'Body Text':
      return (
        <Typography variant="body1" gutterBottom>
          {name}
        </Typography>
      );
    case 'Smaller Body Text':
      return (
        <Typography variant="body2" gutterBottom>
          {name}
        </Typography>
      );
    case 'Button':
      return <DefaultButton style={{ height: '35', width: '75' }} />;
    case 'Button with Label':
      return <SaveButton style={{ height: '55', width: '75' }} />;
    case 'Icon Button':
      return <Trashcan width='30'/>;
    case 'Round Button':
      return <TrashcanCircle width='40'/>;
    case 'Upload Button':
      return <UploadFileButton width='80'/>;
    case 'iconPreviews':
      return (
        <Grid container>
          <Grid item>
            <DropdownMenuDetails width='75'/>
          </Grid>
          <Grid item>
            <DropdownMenuSimple width='75'/>
          </Grid>
          <Grid item>
            <Trashcan width='30' />
          </Grid>
          <Grid item>
            <TrashcanCircle width='40' />
          </Grid>
          <Grid item>
            <UploadFileButton width='50'/>
          </Grid>
        </Grid>
      );
    default:
      return <Typography>Error: `{name}` preview not found.</Typography>;
  }
};

DraggableItem.propTypes = {
  name: propTypes.string.isRequired,
  classes: propTypes.shape({
    marginLeft: propTypes.string,
  }),
};

export default DraggableItem;
