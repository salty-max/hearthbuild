import React from 'react';
import PropTypes from 'prop-types';

import removeDuplicates from '../../utils/remove-duplicates';

import DeckCard from './DeckCard';

const DeckList = ({ cards, hsClass }) => {
  // Remove duplicates from deck display
  const uniqueCards = removeDuplicates(cards, 'name');

  // Filter neutral cards
  const neutralCards = uniqueCards.filter(card => card.class === 'Neutral');
  // Filter class cards
  const deckClassCards = uniqueCards.filter(card => card.class === hsClass);

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
                rarity={card.rarity}
                img={card.img}
                isTwice={cards.filter(c => c.name === card.name).length > 1}
              />
            ))}
          </div>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              {hsClass}
            </p>
            {deckClassCards.map(card => (
              <DeckCard
                key={card._id}
                cost={card.cost}
                name={card.name}
                rarity={card.rarity}
                img={card.img}
                isTwice={cards.filter(c => c.name === card.name).length > 1}
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
  hsClass: PropTypes.string.isRequired,
};

export default DeckList;
