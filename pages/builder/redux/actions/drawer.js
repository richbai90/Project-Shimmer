import { OPEN_DRAWER, CLOSE_DRAWER, SET_DRAWER_FILTER } from '../types/drawer';

export const filter = filterText => ({
  type: SET_DRAWER_FILTER,
  payload: { filter: filterText },
  // activeItem: { value },
});

export const open = () => ({
  type: OPEN_DRAWER,
  payload: true,
});

export const close = () => ({
  type: CLOSE_DRAWER,
  payload: true,
});
