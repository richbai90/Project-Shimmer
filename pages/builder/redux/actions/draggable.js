import {
  START_DRAGGING,
  END_DRAGGING,
  SET_ACTIVE_ITEM,
  SELECT_ACTIVE_ITEM,
} from '../types/draggable';

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

export const selectActiveItem = (itemID, dragging) => ({
  type: SELECT_ACTIVE_ITEM,
  payload: { itemID, dragging },
});
