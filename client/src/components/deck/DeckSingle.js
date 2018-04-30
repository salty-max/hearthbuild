import React from 'react';

import DeckMeta from './DeckMeta';
import DeckRating from './DeckRating';
import DeckList from './DeckList';
import DeckDesc from './DeckDesc';
import DeckComments from './comments/DeckComments';

const DeckSingle = () => (
  <main>
    <section className="section" id="deck-single">
      <div className="container">
        <div className="deck">
          <div className="columns">
            <DeckMeta />
            <DeckRating />
          </div>
          <DeckList />
          <DeckDesc />
          <DeckComments />
        </div>
      </div>
    </section>
  </main>
);

export default DeckSingle;
