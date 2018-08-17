import {
  UPDATE_COMPONENTS, END_DRAGGING, START_DRAGGING, SET_ACTIVE_ITEM,
} from '../types/componentState';

export const updateComponents = componentMap => ({
  type: UPDATE_COMPONENTS,
  payload: componentMap,
});

export const addChild = child => ({
  // TODO 07/27/2018 Rich Baird : Change type to be imported
  type: 'ADD_CHILD',
  payload: child,
});

export const setActiveItem = itemID => ({
  type: SET_ACTIVE_ITEM,
  payload: { activeItem: itemID },
});

export const startDragging = () => ({
  type: START_DRAGGING,
  payload: { dragging: true },
});
export const endDragging = () => ({
  type: END_DRAGGING,
  payload: { dragging: false },
});
