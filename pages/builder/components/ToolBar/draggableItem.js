import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
// import IconButton from '@material-ui/core/IconButton';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
  RadioButtonBlue,
  TelephoneIcon,
  CheckboxCustIcon,
  Trashcan,
  DropdownMenuDetails,
  DropdownMenuSimple,
} from './custom_icons/CustomIcons';

const handleItemClick = (clickHandler, itemID) => () => {
  console.log(itemID);
  clickHandler(itemID);
};

const DraggableItem = ({
  selectActiveItem, name, id, classes,
}) => {
  switch (name) {
    case 'Card':
      return (
        <Card
        style={{ height: '110px', width: '85px', margin: '50px' }}
          onClick={handleItemClick(selectActiveItem, id)}
        ><br/><br/>&nbsp;<br/><br/>
        </Card>
      );
    case 'Paper':
      return (
        <Paper
        style={{ height: '110px', width: '85px', margin: '50px' }}
          onClick={handleItemClick(selectActiveItem, id)}
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
    case 'Drop down Menu':
      return (
        <div>
          <InputLabel>input label</InputLabel>
          <TextField
            id={`${name}_example`}
            select
            value={name}
            className={classes.marginLeft}
            style={{ width: '200px' }}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            autowidth='true'
            // helpertext="Dropdown Menu Options"
            margin='normal'
          >{name}
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </TextField>
        </div>
      );
    case 'Radio Box':
      return (
        <div>
          <FormControlLabel
              value={name}
              control={<Radio color="primary" />}
              label={name}
              labelPlacement="start"
              className={classes.marginLeft}
            />
        </div>
      );
    case 'Checkbox':
      return (
        <>
          <path d="M462.329,493.291H30.614C18.726,493.291,9,483.565,9,471.677V29.905C9,18.017,18.726,8.291,30.614,8.291  h441.771c11.888,0,21.614,9.726,21.614,21.614V461.62C493.991,479.048,479.739,493.291,462.329,493.291z"/>
          <FormControlLabel
            control={ <Checkbox/> }
            label={name}
            labelPlacement="start"
            className={classes.marginLeft}
          />
        </>
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
      return (<Button className={classes.button}> Default </Button>);
    case 'Contained Button':
      return (<Button className={classes.button} variant="contained" color="primary" >Contained</Button>);
    case 'Outlined Button':
      return (<Button className={classes.button} variant="outlined"> Outlined </Button>);
    case 'Small Button':
      return (<Button className={classes.button} variant="contained" size="small" color="primary" > Small </Button>);
    case 'Submit':
      return (<Button size="small" className={classes.submitButton}>{name}</Button>);
    case 'Button with Label':
      return (<Button variant="contained" size="small" className={classes.button}><SaveIcon/> Save </Button>);
    case 'Icon Button':
      return (
          <DeleteIcon color="secondary" />
      );
    case 'Round Button':
      return (
          <Button variant="fab" disableRipple='true' disableFocusRipple='true' mini color="secondary" labelplacement="start" label="Icon Button" className={classes.button} aria-label="Icon Button">
            <DeleteIcon />
          </Button>
      );
    case 'Upload Button':
      return (
        <>
          <input className={classes.input} type="file" />
        </>
      );
    case 'iconPreviews':
      return (
        <>
          <CheckboxCustIcon width='50'/>
          <TelephoneIcon width='50'/>
          <RadioButtonBlue width='50'/>
          <DropdownMenuDetails width='75' marginTop='300px'/>
          <DropdownMenuSimple width='75' marginTop='300px'/>
          <Trashcan width='75' marginTop='300px'/>
        </>
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
