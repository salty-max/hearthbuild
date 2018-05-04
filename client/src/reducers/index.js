import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import homeReducer from './homeReducer';
import deckReducer from './deckReducer';
import builderReducer from './builderReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  home: homeReducer,
  deck: deckReducer,
  builder: builderReducer
});
