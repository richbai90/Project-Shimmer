import ReactJsonSchema from 'react-json-schema';
import { merge } from 'lodash';
import { UPDATE_COMPONENTS } from '../types/componentState';
import ReactDOMServer from 'react-dom/server';

const defaultState = {
  componentMap: {},
  componentTree: null,
  dragging: false,
};

const updateComponents = (state, action) => {
  const schemaParser = new ReactJsonSchema();
  const { map } = action.payload;
  const newState = {
    componentMap: map,
    componentTree: schemaParser.parseSchema(map),
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
