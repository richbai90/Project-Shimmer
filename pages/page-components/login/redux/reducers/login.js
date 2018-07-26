import { UPDATE_USERNAME } from '../types/login';

const defaultState = {
  username: '',
  password: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: action.payload });
    default:
      return state;
  }
};
