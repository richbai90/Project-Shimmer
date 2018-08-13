import { combineReducers } from 'redux';
import builderReducer from './builder';
import templatesReducer from './templates';
import drawerReducer from './drawer';

export default combineReducers({
  page: builderReducer,
  templates: templatesReducer,
  drawer: drawerReducer,
});
