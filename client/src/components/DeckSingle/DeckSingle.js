import React from 'react';

import DeckMeta from 'src/components/DeckSingle/DeckMeta';
import DeckRating from 'src/components/DeckSingle/DeckRating';
import DeckList from 'src/components/DeckSingle/DeckList';
import DeckDesc from 'src/components/DeckSingle/DeckDesc';
import DeckComments from 'src/components/DeckSingle/DeckComments';

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
