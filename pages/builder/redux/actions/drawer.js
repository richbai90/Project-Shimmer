import { DRAWER_OPEN, DRAWER_CLOSE } from '../types/drawer';

export const open = () => ({
  type: DRAWER_OPEN,
  payload: true,
});

export const close = () => ({
  type: DRAWER_CLOSE,
  payload: true,
});
