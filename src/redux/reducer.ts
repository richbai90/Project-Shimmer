import { combineReducers, AnyAction } from 'redux';

// // import all the reducers
// import home from '@root/pages/home/redux/reducers';
// import login from '@root/pages/login/redux/reducers';
// import builder from '@root/pages/builder/redux/reducers';

const defaultReducer = ( state = {}, action: AnyAction ) => ((action && state) || state);

export default combineReducers({
  default: defaultReducer,
});
