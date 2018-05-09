import { DECKS_LOADING, GET_DECKS, SET_FILTERS } from './types';

export const getDecks = decks => ({
  type: GET_DECKS,
  payload: decks
})

export const setDecksLoading = () => ({
  type: DECKS_LOADING
})

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
})