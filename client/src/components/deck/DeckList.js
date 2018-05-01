import React from 'react';
import PropTypes from 'prop-types';

import DeckCard from './DeckCard';

const DeckList = ({ cards }) => {
  if (cards.length === 0) {
    console.log('loading...');
    // return <p>loading...</p>;
  }

  console.log(cards);

  return (
    <div className="deck--list">
      <div className="columns">
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Neutral
            </p>
            {cards.map(card => {
              <DeckCard
                key={card._id}
                cost={card.cost}
                name={card.name}
              />
            })}
          </div>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Warlock
            </p>
            {cards.map(card => {
              <DeckCard
                key={card._id}
                cost={card.cost}
                name={card.name}
              />
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
