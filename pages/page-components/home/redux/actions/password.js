import { OPEN, CLOSE } from './types/password';

export const open = () => ({
  type: OPEN,
  payload: true,
});

export const close = () => ({
  type: CLOSE,
  payload: true,
});
