const actionMap = {
  open(state) {
    return Object.assign({}, state, { open: true });
  },

  close(state) {
    return Object.assign({}, state, { open: false });
  },

  default(state) {
    return state;
  },
};

const defaultState = {
  open: false,
};

export default (state = defaultState, action) => (
  (actionMap[action.type.toLowerCase().split('password/')[1]] || actionMap.default)(state, action.payload) || state
);
