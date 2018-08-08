import { DRAWER_OPEN, DRAWER_CLOSE } from '../types/drawer';

const actionMap = {
  [DRAWER_OPEN]: state => ({ ...state, open: true }),
  [DRAWER_CLOSE]: state => ({ ...state, open: false }),
};

const defaultState = {
  open: false,
};

export default (state = defaultState, { type, payload }) => (
  actionMap[type] || (() => state)
)(state, payload);
