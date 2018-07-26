import { combineReducers } from 'redux';

// import all the reducers
import home from '../../pages/page-components/home/redux/reducers';
import login from '../../pages/page-components/login/redux/reducers';

export default combineReducers({
  home,
  login,
});
