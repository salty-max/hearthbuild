import axios from 'axios';

import { getDecks } from '../actions/homeActions';
import { DECKS_LOADING } from '../actions/types';

export default store => next => action => {
  
  switch (action.type) {
    case DECKS_LOADING:
      axios.get('/api/decks')
        .then(res => {
          store.dispatch(getDecks(res.data));
          console.log(res.data);
        })
        .catch(err => {
          store.dispatch(getDecks([]))
        })
      break;
    default:
      break;
  }

  next(action);
}