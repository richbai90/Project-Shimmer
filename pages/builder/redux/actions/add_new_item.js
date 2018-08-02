import { ADD_NEW_BOX_SHAPE } from '../types/canvas_shapes';

const defaultState = {
  boxShape: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_BOX_SHAPE:
      return Object.assign({}, state, { boxShape: action.payload });
    default:
      return state;
  }
};
