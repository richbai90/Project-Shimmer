import { combineReducers } from 'redux';
import passwordReducer from './password';

export default combineReducers({
  password: passwordReducer,
});
