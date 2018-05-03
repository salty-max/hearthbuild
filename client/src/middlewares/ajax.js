import axios from 'axios';

import { getDecks } from '../actions/homeActions';
import { DECKS_LOADING, CARDS_LOADING } from '../actions/types';
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
          cards = cards.filter(card => card.type !== 'Hero')
          store.dispatch(getCardsFromApi(cards));
        })
        .catch(err => {
          console.log('Cards not found');
          store.dispatch(getCardsFromApi([]));
        });
      break;
    default:
      break;
  }

  next(action);
}