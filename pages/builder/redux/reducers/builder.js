import ReactJsonSchema from 'react-json-schema';

import { UPDATE_COMPONENTS } from '../types/component-state';

const defaultState = {
  componentMap: {},
  componentTree: null,
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
