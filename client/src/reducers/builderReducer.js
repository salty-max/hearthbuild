import { PRE_BUILD, CARDS_LOADING, GET_CARDS_FROM_API } from '../actions/types';

const initialState = {
  cardsPool: [],
  preClass: '',
  preFormat: '',
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
    // Send prebuilder data to builder
    case PRE_BUILD:
      return {
        ...state,
        preFormat: action.payload.format,
        preClass: action.payload.hsClass
      }
    default:
      return state;
  }
}