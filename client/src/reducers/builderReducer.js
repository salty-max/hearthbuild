import isEmpty from '../utils/is-empty';
import { CARDS_LOADING, GET_CARDS_FROM_API } from '../actions/types';

const initialState = {
  cardsPool: [],
  currentDeck: {},
  cardsLoading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_LOADING:
      return {
        ...state,
        cardsLoading: true,
      }
    case GET_CARDS_FROM_API:
      console.log('fetched');
      return {
        ...state,
        cardsPool: action.payload,
        cardsLoading: false
      }
    default:
      return state;
  }
}