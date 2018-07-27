import { PASSWORD_OPEN, PASSWORD_CLOSE } from '../types/password';

export const open = () => ({
  type: PASSWORD_OPEN,
  payload: true,
});

export const close = () => ({
  type: PASSWORD_CLOSE,
  payload: true,
});
