import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
//
// import Card from '@material-ui/core/Card';

const handleItemClick = (clickHandler, itemID) => () => {
  console.log(itemID);
  clickHandler(itemID);
};

const DraggableItem = ({
  setActiveItem,
  name,
  id,
  classes,
}) => {
  switch (name) {
    case 'Box Container':
      return (
        <Card
          onClick={handleItemClick(setActiveItem, id)}
        >{name}</Card>
      );
    case 'Line':
      return (
        <div>{name}
          <Divider style={{ width: '100px' }}/>
        </div>
      );
    case 'Textbox':
      return (
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          margin="normal"
        />
      );
    case 'Multiline':
      return (
        <TextField
            id="multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
          />
      );
    case 'Drop down Menu':
      return (
        <div>
          <InputLabel>input label</InputLabel>
          <TextField
            id={`${name}_example`}
            select
            value={name}
            // label={'Drop Down Menu Options'}
            className={classes.marginLeft}
            style={{ width: '200px' }}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            autoWidth='true'
            // helpertext="Dropdown Menu Options"
            margin='normal'
          >{name}
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </TextField>
        </div>
      );
    case 'Radio box':
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
        <FormControlLabel
              control={
                <Checkbox/>
              }
              label={name}
              labelPlacement="start"
              className={classes.marginLeft}
            />
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
      return (
        <div style={{ height: 'fit-content' }} >
          <Button className={classes.button} variant="outlined"> Outlined </Button>
          <Button className={classes.button}> Default </Button>
        </div>
      );
    case 'Small Button':
      return (
        <div style={{ height: 'fit-content' }} >
          <Button className={classes.button} size="small"> Small </Button>
          <Button className={classes.button} size="small" variant="outlined"> Small </Button>
          <Button className={classes.button} variant="contained" size="small" color="primary" >
            Contained
          </Button>
        </div>
      );
    case 'Submit':
      return (
        <div>
          <Button size="small" className={classes.submitButton}>
            {name}
          </Button>
          <Button variant="outlined" size="small" className={classes.button} style={{ borderColor: 'green' }}>
            {name}
          </Button>
        </div>
      );
    case 'Button With Icon':
      return (
        <>
          <Button variant="contained" size="small" className={classes.button}>
            <SaveIcon/> Save
          </Button>
          <Button variant="contained" color="default" className={classes.button}>
            Upload&nbsp; <CloudUploadIcon className={classes.rightIcon} />
          </Button>
        </>
      );
    case 'Icon Button':
      return (
        <div>
          <Button variant="fab" mini color="secondary" labelPlacement="start" label="Icon Button" className={classes.button} aria-label="Icon Button">
            <DeleteIcon />
          </Button>
          <Button mini color="secondary" labelPlacement="start" label="Icon Button" className={classes.button} aria-label="Icon Button">
            <DeleteIcon />
          </Button>
        </div>
      );
    case 'Upload Button':
      return (
          <div>
            <IconButton accept="image/*" className={classes.input} type="file" color="primary" className={classes.button} component="span">
                <PhotoCamera />
            </ IconButton>
            <input className={classes.input} type="file" />
          </div>
      );
    default:
      return <Typography>Error: `{name}` preview not found.</Typography>;
  }
};
export default DraggableItem;
