import { UPDATE_USERNAME, UPDATE_PASSWORD } from '../types/login';

const defaultState = {
  username: '',
  password: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: action.payload });
    case UPDATE_PASSWORD:
      return Object.assign({}, state, { password: action.payload });
    default:
      return state;
  }
};
