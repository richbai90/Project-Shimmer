import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
// import Card from '@material-ui/core/Card';
// import Card from '@material-ui/core/Card';

const DraggableItem = ({ name }) => {
  console.log('name', name)
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
          floatingLabelText="TextField"
        />
      );
    case 'Multiline':
      return (
        <TextField
          draggable
          hintText="Multiline TextField"
          style={{ textAlign: 'left' }}
          floatingLabelText="MultiLine TextField"
          multiLine={true}
          rows={2}
        />
      );
    case 'Drop down Menu':
      return (
        <div>{name}
          <Divider style={{ width: '100px' }}/>
        </div>
      );
    case 'Radio box':
      return (
        <div>{name}
          <Divider style={{ width: '100px' }}/>
        </div>
      );
    case 'Checkbox':
      return (
        <div>{name}
          <Divider style={{ width: '100px' }}/>
        </div>
      );
    default:
      return <Typography>Error: {name} not found</Typography>;
  }
};
export default DraggableItem;
