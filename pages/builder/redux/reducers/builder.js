import { merge } from 'lodash';
import {
  UPDATE_COMPONENTS,
} from '../types/componentState';

const defaultState = {
  componentMap: {},
  componentTree: null,
  dragging: false,
  activeItem: {},
};

const updateComponents = (state, { map, tree }) => {
  const newState = {
    componentMap: map,
    componentTree: tree,
  };
  return merge({}, state, newState);
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case UPDATE_COMPONENTS:
      return updateComponents(state, payload);
    default:
      return state;
  }
};
