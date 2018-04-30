import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  home: homeReducer
});