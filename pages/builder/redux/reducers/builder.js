import ReactJsonSchema from 'react-json-schema';

import { UPDATE_COMPONENTS } from '../types/componentState';

const defaultState = {
  componentMap: {},
  componentTree: null,
  dragging: false,
};

const updateComponents = (state, action) => ({
  ...state,
  componentMap: action.payload,
  componentTree: new ReactJsonSchema().parse(action.componentMap),
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_COMPONENTS:
      return updateComponents(state, action);
    default:
      return state;
  }
};
