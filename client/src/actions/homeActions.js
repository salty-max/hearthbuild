import { DECKS_LOADING, GET_DECKS } from './types';

export const getDecks = decks => ({
  type: GET_DECKS,
  payload: decks
})

export const setDecksLoading = () => ({
  type: DECKS_LOADING
})