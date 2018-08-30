import {
  OPEN_DRAWER, CLOSE_DRAWER, SET_DRAWER_FILTER, LOAD_DRAWER_COMPONENTS,
} from '../types/drawer';

export const drawerFilterAction = filterText => ({
  type: SET_DRAWER_FILTER, //  can be the string too: 'DRAWER/SET_DRAWER_FILTER',
  payload: { filter: filterText },
  // activeItem: { value },
});

export const openDrawerAction = () => ({
  type: OPEN_DRAWER,
  payload: { isOpen: true },
});

export const closeDrawerAction = () => ({
  type: CLOSE_DRAWER,
  payload: { isOpen: false },
});

export const loadComponentDetailsAction = filterText => ({
  type: LOAD_DRAWER_COMPONENTS,
  payload: { filter: filterText },
});
