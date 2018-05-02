import axios from 'axios';

import { CARDS_LOADING, GET_CARDS_FROM_API } from './types';

export const getCardsFromApi = (hsClass) => dispatch => {
  dispatch(setCardsLoading());

  let cards = [];
  let classCards = [];
  let neutralCards = [];

  const instance = axios.create({
    headers: { 'X-Mashape-Key' : 'uY73MkKAFDmshSrK4M1A28Jxg3fEp1GLauRjsnUDNngp96u7dq' }
  });

  instance.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${hsClass}`, {
    params: {
      'collectible': 1
    }
  })
    .then(res => {
      classCards = res.data.filter(card => card.type !== 'Hero');
      cards = cards.concat(classCards);
    })
    .catch(err => {
      console.log('Cards not found');
    });
  
  instance.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Neutral`, {
    params: {
      'collectible': 1
    }
  })
    .then(res => {
      neutralCards = res.data.filter(card => card.type !== 'Hero');
      cards = cards.concat(neutralCards);
      cards = cards.sort(card => card.cost);

      dispatch({
        type: GET_CARDS_FROM_API,
        payload: cards
      })
    })
    .catch(err => {
      console.log('Cards not found');
    });
}

export const setCardsLoading = () => {
  return {
    type: CARDS_LOADING
  }
}