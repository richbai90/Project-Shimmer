import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import propTypes from 'prop-types';

import {
  RadioButtonBlue,
  UploadFileButton,
  Trashcan,
  TrashcanCircle,
  DropdownMenuSimple,
  SaveButton,
  DefaultButton,
  CheckboxCustIcon,
} from '../custom_icons/CustomIcons';

const handleItemClick = (clickHandler, itemID) => () => {
  clickHandler(itemID);
};

const PortalItem = ({
  selectActiveItem, value, id, classes, name,
}) => {
  switch (value) {
    case 'card':
      return (
        < Paper
          style={{ height: '45px', width: '45px' }}
          // onClick={handleItemClick(selectActiveItem, id)}
        > <PersonIcon style={{ width: '100%', height: '66%' }}/>
        </Paper>
      );
    case 'paper':
      return (
        <Paper
          // onClick={handleItemClick(selectActiveItem, id)}
          style={{ height: '45px', width: '45px' }}
        ><br/><br/><br/><br/></Paper>
      );
    case 'line':
      return (
        <Typography className={classes.darkFont}>{name}</Typography>
      );
    case 'textbox':
      return (
        <Typography className={classes.darkFont}
          id="texbox"
          margin = 'auto'
        >TextBox
        </Typography>
      );
    case 'multilineTextbox':
      return (
        <Typography className={classes.darkFont}
          id="multiline-flexible"
          label="Multiline Textbox"
          margin = 'auto'
        >Multiline TextBox
        </Typography>
      );
    case 'dropDownMenu':
      return (
        < >
          <div className={classes.cssTriangleDown} style={{ margin: 'auto auto auto 0' }}> &nbsp;</div>
          <Typography className={classes.darkFont} style={{ marginBottom: 'auto' }} >{name}</Typography>
        </>
      );
    case 'radioBtn':
      return (
        < >
          <RadioButtonBlue style={{ width: '20px', height: '20px', margin: 'auto auto auto 0'}}/>
          <Typography className={classes.darkFont} style={{ marginBottom: 'auto' }} >{name}</Typography>
        </>
      );
    case 'checkbox':
      return (
        <>
          <CheckboxCustIcon style={{ fill: 'orange', width: '20px', margin: 'auto auto auto 0'}}/>
          <Typography className={classes.darkFont} style={{ marginBottom: 'auto' }} >{name}</Typography>
        </>
      );
    case 'headerTxt':
      return (
        <Typography className={classes.darkFont} variant="display2" gutterBottom>
          {name}
        </Typography>
      );
    case 'title':
      return (
        <Typography className={classes.darkFont} variant="title" gutterBottom>
          {name}
        </Typography>
      );
    case 'subheadingTxt':
      return (
        <Typography className={classes.darkFont} variant="subheading" gutterBottom>
          {name}
        </Typography>
      );
    case 'bodyText':
      return (
        <Typography className={classes.darkFont} variant="body1" gutterBottom>
          {name}
        </Typography>
      );
    case 'smallerBodyText':
      return (
        <Typography className={classes.darkFont} variant="body2" gutterBottom>
          {name}
        </Typography>
      );
    case 'default':
      return (
        <div>
          <DefaultButton style={{ height: '35', width: '63', margin: 'auto auto auto 0' }} />
          <Typography className={classes.darkFont} > Contained </Typography>
        </div>
      );
    case 'labelIcon':
      return (
        <div>
         <SaveButton style={{ height: '55', width: '75', margin: 'auto auto auto 0' }} />
           <Typography className={classes.darkFont} > With Icon and Label</Typography>
        </div>
      );
    case 'icon':
      return (
        <div>
          <Trashcan width='30' style={{ margin: 'auto auto auto 0' }}/>
          <Typography className={classes.darkFont} >Icon</Typography>
        </div>
      );
    case 'roundIcon':
      return (
        <div>
          <TrashcanCircle width='40' style={{ margin: 'auto auto auto 0' }}/>
          <Typography className={classes.darkFont} >Round</Typography>
        </div>
      );
    case 'upload':
      return (
        <>
          <UploadFileButton width='81' style={{ maxHeight: '30px', margin: 'auto auto auto 0' }}/>
          <Typography className={classes.darkFont} >&nbsp;&nbsp;&nbsp;Upload File</Typography>
        </>
      );
    case 'iconPreviews':
      return (
        <>
          <DropdownMenuSimple width='75' style={{ margin: 'auto auto auto 0' }}/>
        </>
      );
    case 'label':
    case 'formsTemplates':
    case 'formsContainer':
    case 'submit':
    case 'save':
    case 'cancel':
    case 'image':
    case 'color':
    case 'form':
    case 'action':
    case 'item1':
    case 'item2':
    case 'item3':
      return <Typography className={classes.darkFont}>{name}</Typography>;
    default:
      return (<Typography className={classes.darkFont}>
          Error: `{value}` preview not found.
        </Typography>);
  }
};

PortalItem.propTypes = {
  value: propTypes.string.isRequired,
  classes: propTypes.shape({
    marginLeft: propTypes.string,
  }),
};
export default PortalItem;
