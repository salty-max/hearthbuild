import axios from 'axios';

import { getDecks, setDecksLoading } from '../actions/homeActions';
import { DECKS_LOADING, CARDS_LOADING, SEND_DECK, GET_ERRORS } from '../actions/types';
import { getCardsFromApi } from '../actions/builderActions';

export default store => next => action => {
  switch (action.type) {
    case DECKS_LOADING:
      axios.get('/api/decks')
        .then(res => {
          store.dispatch(getDecks(res.data));
        })
        .catch(err => {
          store.dispatch(getDecks([]))
        })
      break;
    case CARDS_LOADING:
      let cards = [];
      const instance = axios.create({
        headers: { 'X-Mashape-Key': 'uY73MkKAFDmshSrK4M1A28Jxg3fEp1GLauRjsnUDNngp96u7dq' }
      });

      instance.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards', {
        params: { 'collectible': 1 }
      })
        .then(res => {
          Object.keys(res.data).map(set => {
            cards = cards.concat(res.data[set]);
          })
          cards = cards.filter(card => card.type !== 'Hero' || (card.type === 'Hero' && card.rarity === 'Legendary'))
          store.dispatch(getCardsFromApi(cards));
        })
        .catch(err => {
          console.log('Cards not found');
          store.dispatch(getCardsFromApi([]));
        });
      break;
    case SEND_DECK:
      axios.post('/api/decks', action.payload)
        .then(res => {
          store.dispatch(setDecksLoading());
          window.location = '/';
        })
        .catch(err => {
          store.dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        });
        break;
    default:
      break;
  }

  next(action);
}