import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import ajax from './middlewares/ajax';

const initialState = {};
const middlewares = [thunk, ajax];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  )
);

export default store;