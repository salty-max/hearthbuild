import React from 'react';

import DeckCard from './DeckCard';

const DeckList = () => (
  <div className="deck--list">
    <div className="columns">
      <div className="column is-6">
        <div className="panel">
          <p className="panel-heading">
            Neutral
          </p>
          <DeckCard
            cost="3"
            name="Acolyte de la souffrance"
          />
          <DeckCard
            cost="10"
            name="Alextrasza"
          />
          <DeckCard
            cost="3"
            name="Acolyte de la souffrance"
          />
        </div>
      </div>
      <div className="column is-6">
        <div className="panel">
          <p className="panel-heading">
            Warlock
          </p>
          <DeckCard
            cost="3"
            name="Acolyte de la souffrance"
          />
          <DeckCard
            cost="10"
            name="Alextrasza"
          />
          <DeckCard
            cost="3"
            name="Acolyte de la souffrance"
          />
        </div>
      </div>
    </div>
  </div>
);

export default DeckList;
