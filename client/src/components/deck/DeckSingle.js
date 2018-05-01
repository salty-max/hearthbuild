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
    };
  }

  componentDidMount() {
    this.getDeck('5ae1ef6d40f923503e4ed403');
  }

  // Get deck by id
  getDeck = (id) => {
    axios.get(`http://localhost:5000/api/decks/id/${id}`)
    .then(res => {
      this.setState({
        deck: res.data,
        author: this.getAuthorName(res.data.author),
      })
    });
  }
  
  // Get author name by id
  getAuthorName = (id) => {
    axios.get(`http://localhost:5000/api/users/id/${id}`)
    .then(res => {
      this.setState({
        author: res.data.name
      })
    });
  }

  render() {
    const { deck, author } = this.state;

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
              <DeckList />
              <DeckDesc />
              <DeckComments />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default DeckSingle;
