import { clone } from 'lodash';
import { OPEN_DRAWER, CLOSE_DRAWER, SET_DRAWER_FILTER } from '../types/drawer';

const items = [
  // Shapes will tend to be items that dont have interactive ablility?
  { name: 'Shapes', value: 'heading', parent: 'shapes' },
  { name: 'Line', value: 'line', parent: 'shapes' },
  { name: 'Containers', value: 'subheading', parent: 'shapes' },
  { name: 'Box Container', value: 'boxContainer', parent: 'shapes' },

  // Insert text will be like labels, and non-interactive
  { name: 'Insert Text', value: 'heading', parent: 'text' },
  { name: 'Headline', value: 'headline', parent: 'text' },
  { name: 'Title', value: 'title', parent: 'text' },
  { name: 'Subheading', value: 'insertSubheading', parent: 'text' },
  { name: 'Body Text', value: 'bodyText', parent: 'text' },
  { name: 'Smaller Body Text', value: 'smallerBodyText', parent: 'text' },

  // Input Fields: for form inputs
  { name: 'Text Input Fields', value: 'heading', parent: 'inputFields' },
  // { name: 'Text Input', value: 'subheading', parent: 'inputFields' },
  { name: 'Textbox', value: 'textbox', parent: 'inputFields' },
  { name: 'Multiline', value: 'multiline', parent: 'inputFields' },
  // non text type inputsfields:
  { name: ' ', value: 'subheading', parent: 'inputFields' },
  { name: 'Drop down Menu', value: 'Drop down Menu', parent: 'inputFields' },
  { name: 'Radio box', value: 'radio box', parent: 'inputFields' },
  { name: 'Checkbox', value: 'checkbox', parent: 'inputFields' },
  { name: 'Drop zone', value: 'drop zone', parent: 'inputFields' },

  { name: 'Buttons', value: 'heading', parent: 'buttons' },
  { name: 'Button', value: 'button', parent: 'buttons' },
  { name: 'Small Button', value: 'button', parent: 'buttons' },
  { name: 'Submit', value: 'submit', parent: 'buttons' },
  { name: 'Button With Icon', value: 'Button With Icon', parent: 'buttons' },
  { name: 'Icon Button', value: 'Icon button', parent: 'buttons' },
  { name: 'Upload Button', value: 'Upload button', parent: 'buttons' },


];

const defaultState = {
  isOpen: false,
  // activeItem: '',
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
