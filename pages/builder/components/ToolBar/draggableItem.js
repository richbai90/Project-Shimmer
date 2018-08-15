import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';


//
// import Card from '@material-ui/core/Card';

const DraggableItem = ({ name, classes }) => {
  switch (name) {
    case 'Box Container':
      return (
        <Card>{name}</Card>
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
          style={{ textAlign: 'left' }}
          floatinglabeltext="TextField"
        />
      );
    case 'Multiline':
      return (
        <TextField
          draggable
          value={name}
          hinttext="Multiline TextField"
          style={{ textAlign: 'left' }}
          floatinglabeltext="MultiLine TextField"
          multiline={true}
          rows={2}
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
    default:
      return <Typography>Error: {name} not found</Typography>;
  }
};
export default DraggableItem;
