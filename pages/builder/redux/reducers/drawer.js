import { clone } from 'lodash';
import {
  OPEN_DRAWER, CLOSE_DRAWER, SET_DRAWER_FILTER,
} from '../types/drawer';

const items = [
  // Shapes will tend to be items that dont have interactive ablility?
  { name: 'Shapes', value: 'heading', parent: 'shapes' },
  { name: 'Line', value: 'line', parent: 'shapes', id: 'drawer/line' },
  { name: 'Containers', value: 'subheading', parent: 'shapes' },
  { name: 'Paper', value: 'paper', parent: 'shapes', id: 'drawer/paper' },
  { name: 'Card', value: 'card', parent: 'shapes', id: 'drawer/card' },

  // Insert text will be like labels, and non-interactive
  { name: 'Insert Text', value: 'heading', parent: 'text' },
  { name: 'Headline', value: 'headline', parent: 'text', id: 'drawer/headline' },
  { name: 'Title', value: 'title', parent: 'text', id: 'drawer/title' },
  { name: 'Subheading', value: 'insertSubheading', parent: 'text', id: 'drawer/insertSubheading' },
  { name: 'Body Text', value: 'bodyText', parent: 'text', id: 'drawer/bodyText' },
  { name: 'Smaller Body Text', value: 'smallerBodyText', parent: 'text', id: 'drawer/smallerBodyText' },

  // Input Fields: for form inputs
  { name: 'Text Input Fields', value: 'heading', parent: 'inputFields' },
  // { name: 'Text Input', value: 'subheading', parent: 'inputFields', id: 'drawer/value' },
  { name: 'Textbox', value: 'textbox', parent: 'inputFields', id: 'drawer/textbox' },
  { name: 'Multiline', value: 'multiline', parent: 'inputFields', id: 'drawer/multiline' },
  // non text type inputsfields:
  { name: '', value: 'subheading', parent: 'input' },
  { name: 'Drop down Menu', value: 'Drop down Menu', parent: 'inputFields', id: 'drawer/dropDown' },
  { name: 'Radio Box', value: 'radio box', parent: 'inputFields', id: 'drawer/radioBox' },
  { name: 'Checkbox', value: 'checkbox', parent: 'inputFields', id: 'drawer/checkBox' },
  { name: 'Drop zone', value: 'drop zone', parent: 'inputFields', id: 'drawer/dropZone' },

  { name: 'Buttons', value: 'heading', parent: 'buttons' },
  { name: 'Contained Button', value: 'containedButton', parent: 'buttons', id: 'drawer/defaultContainedButton' },
  { name: 'Button with Label', value: 'Button with Label', parent: 'buttons', id: 'drawer/buttonWIcon'  },
  { name: 'Icon Button', value: 'Icon button', parent: 'buttons', id: 'drawer/iconButton' },
  { name: 'Round Button', value: 'Round button', parent: 'buttons', id: 'drawer/roundButton' },
  { name: 'Upload Button', value: 'Upload button', parent: 'buttons', id: 'drawer/uploadButton'  },

  { name: 'Tables', value: 'heading', parent: 'tables' },
  { name: 'iconPreviews', value: 'iconPreviews', parent: 'tables', id: 'drawer/iconPreviews' },


];

const defaultState = {
  isOpen: false,
  items,
};

const setFilter = (initialState, filter) => {
  const newState = clone(initialState);
  const newArray = items.filter(item => item.parent === filter);
  newState.filterValue = filter;
  newState.items = newArray;
  // newState.isOpen = newArray.length > 1 ? newState.isOpen = true : newState.isOpen = false;
  return newState;
};


export default (state = defaultState, { payload, type }) => {
  switch (type) {
    case OPEN_DRAWER:
      return Object.assign({}, state, { ...payload });
    case CLOSE_DRAWER:
      return Object.assign({}, state, { ...payload });
    case SET_DRAWER_FILTER:
      return setFilter(state, payload.filter);
    default:
      return state;
  }
};
