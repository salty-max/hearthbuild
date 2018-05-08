import React from 'react';
import PropTypes from 'prop-types';

import DeckCard from './DeckCard';

const DeckList = ({ cards, hsClass }) => {
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
            {neutralCards.map(card => {
              const isTwice = neutralCards.filter(card => card.cardId).length === 2;

              return (
                <DeckCard
                  key={card._id}
                  cost={card.cost}
                  name={card.name}
                  rarity={card.rarity}
                  img={card.img}
                  isTwice={isTwice}
                />
              );
            })}
          </div>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              {hsClass}
            </p>
            {deckClassCards.map(card => {
              const isTwice = deckClassCards.filter(card => card.cardId).length === 2;

              return (
                <DeckCard
                  key={card._id}
                  cost={card.cost}
                  name={card.name}
                  rarity={card.rarity}
                  img={card.img}
                  isTwice={isTwice}
                />
              );
            })}
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
