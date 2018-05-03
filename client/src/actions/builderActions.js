import axios from 'axios';

import { PRE_BUILD, CARDS_LOADING, GET_CARDS_FROM_API } from './types';

export const prebuild = (format, hsClass) => dispatch => {
  dispatch({
    type: PRE_BUILD,
    payload: {
      format,
      hsClass
    }
  });
}

export const getCardsFromApi = cards => ({
  type: GET_CARDS_FROM_API,
  payload: cards
})

export const setCardsLoading = () => {
  return {
    type: CARDS_LOADING
  }
}