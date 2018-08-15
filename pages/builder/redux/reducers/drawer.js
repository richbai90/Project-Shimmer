import { clone } from 'lodash';
import { OPEN_DRAWER, CLOSE_DRAWER, SET_DRAWER_FILTER } from '../types/drawer';

const items = [
  { name: 'Input Fields', value: 'heading', parent: 'inputFields' },
  { name: 'Text Input', value: 'subheading', parent: 'inputFields' },
  { name: 'Textbox', value: 'textbox', parent: 'inputFields' },
  { name: 'Multiline', value: 'multiline', parent: 'inputFields' },

  { name: ' ', value: 'subheading', parent: 'inputFields' },
  { name: 'Drop down Menu', value: 'Drop down Menu', parent: 'inputFields' },
  { name: 'Radio box', value: 'radio box', parent: 'inputFields' },
  { name: 'Checkbox', value: 'checkbox', parent: 'inputFields' },

  { name: 'Shapes', value: 'heading', parent: 'shapes' },
  { name: 'Line', value: 'line', parent: 'shapes' },
  { name: 'Containers', value: 'subheading', parent: 'shapes' },
  { name: 'Box Container', value: 'boxContainer', parent: 'shapes' },
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
