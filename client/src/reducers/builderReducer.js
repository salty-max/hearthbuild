import isEmpty from '../utils/is-empty';
import { PRE_BUILD, CARDS_LOADING, GET_CARDS_FROM_API } from '../actions/types';

const initialState = {
  cardsPool: [],
  currentDeck: {
    title: '',
    format: '',
    class: '',
    description: '',
    type: '',
    cards: []
  },
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
      return {
        ...state,
        cardsPool: action.payload,
        cardsLoading: false
      }
    case PRE_BUILD:
      return {
        ...state,
        currentDeck: {
          format: action.payload.format,
          class: action.payload.hsClass
        }
      }
    default:
      return state;
  }
}