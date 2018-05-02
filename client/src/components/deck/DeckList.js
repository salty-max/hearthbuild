import React from 'react';
import PropTypes from 'prop-types';

import DeckCard from './DeckCard';

const DeckList = ({ cards }) => {
  const neutralCards = cards.filter(card => card.class === 'Neutral');
  const deckClassCards = cards.filter(card => card.class !== 'Neutral');

  return (
    <div className="deck--list">
      <div className="columns">
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Neutrals
            </p>
            {neutralCards.map(card => (
              <DeckCard
                key={card._id}
                cost={card.cost}
                name={card.name}
              />
            ))}
          </div>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Warlock
            </p>
            {deckClassCards.map(card => (
              <DeckCard
                key={card._id}
                cost={card.cost}
                name={card.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

DeckList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DeckList;
