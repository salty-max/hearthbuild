import isEmpty from '../utils/is-empty';
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    // Send user to Redux
    case SET_CURRENT_USER:
      return {
        ...state,
        // No user is sent
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}