import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DeckMeta from './DeckMeta';
import DeckRating from './DeckRating';
import DeckList from './DeckList';
import DeckDesc from './DeckDesc';
import DeckComments from '../../containers/deck/DeckComments';
import Spinner from '../common/Spinner';

class DeckSingle extends Component {
  componentWillMount() {
    this.props.actions.setCommentsLoading(this.props.deckId);
  }

  deleteDeck = (deckToDelete) => {
    this.props.actions.deleteDeck(this.props.deckId);
  }

  render () {
    const { deckId, auth, decksLoading, decks } = this.props;

    if (decksLoading) {
      return (
        <main>
          <section className="section" id="deck-single">
            <div className="container">
              <div className="deck">
                <div className="columns">
                  <Spinner />
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    }

    const deck = decks.find(deck => deck._id === deckId);

    return (
      <main>
        <section className="section" id="deck-single">
          <div className="container">
            <div className="deck">
              <div className="columns">
                <DeckMeta
                  meta={deck}
                  author={deck.author.name}
                />
                <DeckRating
                  deckId={deckId}
                  likes={deck.likes}
                  views={deck.views}
                  auth={auth}
                />
              </div>
              <DeckList cards={deck.cards} hsClass={deck.class} />
              <DeckDesc desc={deck.description} />
              <DeckComments
                comments={deck.comments}
                auth={auth}
                deckId={deckId}
              />
              {(auth.isAuthenticated && (auth.user.id === deck.author._id)) && (
                <button onClick={this.deleteDeck} className="button is-medium is-fullwidth is-danger delete-deck-button">Delete this deck</button>
              )}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

DeckSingle.propTypes = {
  decksLoading: PropTypes.bool.isRequired,
  decks: PropTypes.arrayOf(PropTypes.object),
};

DeckSingle.defaultProps = {
  decks: [],
}

export default DeckSingle;
