import React from 'react';

import DecksModule from './DecksModule';

class Sidebar extends React.Component {
  state = {
    latestDecks: [
      { id: 1, title: 'Deck 1' },
      { id: 2, title: 'Deck 2' },
      { id: 3, title: 'Deck 3' },
      { id: 4, title: 'Deck 4' },
      { id: 5, title: 'Deck 5' },
    ],

    topRatedDecks: [
      { id: 1, title: 'Deck 1' },
      { id: 2, title: 'Deck 2' },
      { id: 3, title: 'Deck 3' },
      { id: 4, title: 'Deck 4' },
      { id: 5, title: 'Deck 5' },
    ],
  }

  render() {
    const { topRatedDecks, latestDecks } = this.state;

    return (
      <aside className="sidebar">
        <DecksModule title="Top rated decks" decks={topRatedDecks} />
        <DecksModule title="Latest decks" decks={latestDecks} />
      </aside>
    );
  }
}

export default Sidebar;
