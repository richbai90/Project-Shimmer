import { combineReducers } from 'redux';
import builderReducer from './builder';
import templatesReducer from './templates';
import drawerReducer from './drawer';
import draggableReducer from './draggable';

export default combineReducers({
  page: builderReducer,
  templates: templatesReducer,
  drawer: drawerReducer,
  draggable: draggableReducer,
});
