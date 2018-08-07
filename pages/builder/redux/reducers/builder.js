import { merge } from 'lodash';
import { UPDATE_COMPONENTS } from '../types/componentState';

const defaultState = {
  componentMap: {},
  componentTree: null,
  dragging: false,
};

const updateComponents = (state, action) => {
  const { map, tree } = action.payload;
  const newState = {
    componentMap: map,
    componentTree: tree,
  };
  return merge({}, state, newState);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_COMPONENTS:
      return updateComponents(state, action);
    default:
      return state;
  }
};
