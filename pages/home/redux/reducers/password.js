import { PASSWORD_OPEN, PASSWORD_CLOSE } from '../types/password';

const actionMap = {
  [PASSWORD_OPEN]: state => ({ ...state, open: true }),
  [PASSWORD_CLOSE]: state => ({ ...state, open: false }),
};

const defaultState = {
  open: false,
};

export default (state = defaultState, { type, payload }) => (
  actionMap[type] || (() => state)
)(state, payload);
