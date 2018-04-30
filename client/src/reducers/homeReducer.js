
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
  ]
}

export default function(state= initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}