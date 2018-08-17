import { merge, clone } from 'lodash';
import {
  UPDATE_COMPONENTS, SET_ACTIVE_ITEM, END_DRAGGING, START_DRAGGING,
} from '../types/componentState';

const defaultState = {
  componentMap: {},
  componentTree: null,
  dragging: false,
  activeItem: {},
};

const updateComponents = (state, action) => {
  const { map, tree } = action.payload;
  const newState = {
    componentMap: map,
    componentTree: tree,
  };
  return merge({}, state, newState);
};

const setActiveItem = (initialState, action) => {
  const newState = clone(initialState);
  const activeItem = action.payload.item;
  newState.activeItem = activeItem;
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_COMPONENTS:
      return updateComponents(state, action);
    case SET_ACTIVE_ITEM:
      return setActiveItem(state, action);
    case START_DRAGGING:
      return Object.assign({}, state, { ...payload });
    case END_DRAGGING:
      return Object.assign({}, state, { ...payload });
    default:
      return state;
  }
};
