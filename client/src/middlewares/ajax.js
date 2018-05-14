import axios from 'axios';

import {
  DECKS_LOADING,
  CARDS_LOADING,
  SEND_DECK,
  LIKE_DECK,
  ADD_DECK_VIEW,
  DELETE_DECK,
  GET_ERRORS,
  SEND_COMMENT,
  SET_COMMENTS_LOADING,
  DELETE_USER
} from '../actions/types';

import { getDecks, setDecksLoading } from '../actions/homeActions';
import { logoutUser } from '../actions/authActions';
import { getCardsFromApi } from '../actions/builderActions';
import { getComments, setCommentsLoading } from '../actions/deckActions';

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
          Object.keys(res.data).map(set => cards = cards.concat(res.data[set]));
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

    case DELETE_DECK:
      axios.delete(`/api/decks/${action.payload}`)
        .then(res => console.log('Success'))
        .catch(err => console.error(err));
      window.location = '/';
      break;

    case ADD_DECK_VIEW:
      axios.post(`/api/decks/view/${action.payload}`)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log('Error when incrementing deck views');
        });
      break;

    case LIKE_DECK:
      axios.post(`/api/decks/${action.payload.whatToDo}/${action.payload.deckId}`)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log('Error when handling deck like');
        });
      break;

    case SEND_COMMENT:
      axios.post(`/api/decks/comment/${action.payload.deckId}`, action.payload.commentData)
        .then(res => {
          store.dispatch(setCommentsLoading(action.payload.deckId));
        })
        .catch(err => {
          store.dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
        });
      break;

    case SET_COMMENTS_LOADING:
      axios.get(`/api/decks/comments/${action.payload}`)
        .then(res => {
          console.log(res.data);
          store.dispatch(getComments(res.data));
        })
      break;
    
    case DELETE_USER:
      axios.delete(`/api/users/id/${action.payload}`) 
        .then(res => {
          console.log(res.data);
        });
      store.dispatch(logoutUser());
      window.location = '/';
      break;    

    default:
      break;
  }

  next(action);
}
