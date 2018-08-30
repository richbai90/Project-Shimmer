import {
  UPDATE_COMPONENTS,
} from '../types/componentState';

export const updateComponents = componentMap => ({
  type: UPDATE_COMPONENTS,
  payload: componentMap,
});

export const addChild = child => ({
  // TODO 07/27/2018 Rich Baird : Change type to be imported
  type: 'ADD_CHILD',
  payload: child,
});
