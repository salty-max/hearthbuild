
import { DECKS_LOADING, GET_DECKS } from '../actions/types';

const initialState= {
  classes: [
    'Druid',
    'Hunter',
    'Mage',
    'Paladin',
    'Priest',
    'Rogue',
    'Shaman',
    'Warlock',
    'Warrior'
  ],
  decksLoading: false,
  decks: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case DECKS_LOADING:
      return {
        ...state,
        decksLoading: true
      }
    case GET_DECKS:
      return {
        ...state,
        decks: action.payload,
        decksLoading: false
      }
    default:
      return state;
  }
}