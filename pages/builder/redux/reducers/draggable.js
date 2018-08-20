import { clone, merge } from 'lodash';
import { SET_ACTIVE_ITEM, START_DRAGGING, END_DRAGGING } from '../types/draggable';

const defaultState = {
  activeItem: null,
  dragging: false,
};

const setActiveItem = (initialState, { item }) => {
  const newState = clone(initialState);
  newState.activeItem = item;
  return newState;
};

const toggleDragging = (initialState, { dragging }) => merge({}, initialState, { dragging });

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_ITEM:
      return setActiveItem(state, payload);
    case START_DRAGGING:
    case END_DRAGGING:
      return toggleDragging(payload);
    default:
      return state;
  }
};
