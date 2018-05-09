
import { DECKS_LOADING, GET_DECKS, SET_FILTERS } from '../actions/types';

const initialState= {
  deckTypes: [
    { label: 'Aggro', value: 'Aggro' },
    { label: 'Midrange', value: 'Midrange' },
    { label: 'Control', value: 'Control' },
  ],
  classes: [
    { label: 'Druid', value: 'Druid' },
    { label: 'Hunter', value: 'Hunter' },
    { label: 'Mage', value: 'Mage' },
    { label: 'Paladin', value: 'Paladin' },
    { label: 'Priest', value: 'Priest' },
    { label: 'Rogue', value: 'Rogue' },
    { label: 'Shaman', value: 'Shaman' },
    { label: 'Warlock', value: 'Warlock' },
    { label: 'Warrior', value: 'Warrior' },
  ],
  formats: [
    { label: 'Standard', value: 'standard' },
    { label: 'Wild', value: 'wild' },
  ],
  filters: {},
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
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload
      }
    default:
      return state;
  }
}