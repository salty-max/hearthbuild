import React, { Component } from 'react';
import axios from 'axios';

import DeckMeta from './DeckMeta';
import DeckRating from './DeckRating';
import DeckList from './DeckList';
import DeckDesc from './DeckDesc';
import DeckComments from './comments/DeckComments';

class DeckSingle extends Component {
  constructor() {
    super();
    this.state = {
      deck: {},
      cards: [],
      author: '',
    };
  }

  componentDidMount() {
    this.getDeck('5ae321255b644c7477b1664d');
  }

  // Get deck by id
  getDeck = (id) => {
    axios.get(`/api/decks/id/${id}`)
    .then(res => {
      this.setState({
        deck: res.data,
        cards: res.data.cards,
      })

      this.getAuthorName(res.data.author);
    });
  }
  
  // Get author name by id
  getAuthorName = (id) => {
    axios.get(`/api/users/id/${id}`)
    .then(res => {
      this.setState({
        author: res.data.name,
      })
    });
  }

  render() {
    const { deck, cards, author } = this.state;

    return (
      <main>
        <section className="section" id="deck-single">
          <div className="container">
            <div className="deck">
              <div className="columns">
                <DeckMeta
                  meta={deck}
                  author={author}
                />
                <DeckRating />
              </div>
              <DeckList cards={cards} />
              <DeckDesc desc={deck} />
              <DeckComments />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default DeckSingle;
