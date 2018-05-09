import React from 'react';

import DecksModule from './DecksModule';
// import Spinner from '../common/Spinner';
import sortBy from '../../utils/sortBy';

class Sidebar extends React.Component {

  render() {
    let topRatedDecks = [];
    let latestDecks = [];
    
    if (!this.props.loading) {
      topRatedDecks = this.props.decks
        .sort(sortBy('-likes'))
        .slice(0, 5);

      latestDecks = this.props.decks
        .sort(sortBy('-createdAt'))
        .slice(0, 5);
    }

    return (
      <aside className="sidebar">
        <DecksModule title="Top rated decks" decks={topRatedDecks} loading={this.props.loading} />
        <DecksModule title="Latest decks" decks={latestDecks} loading={this.props.loading} />
      </aside>
    );
  }
}

export default Sidebar;
