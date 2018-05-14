import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chart, Bars, Layer, Ticks } from 'rumble-charts';

import DeckMeta from './DeckMeta';
import DeckRating from '../../containers/deck/DeckRating';
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

    // Chart
    const chartData = [{ data: [] }];

    for (let i = 0; i <= 10; i++) {
      chartData[0].data.push([i, deck.cards.filter(card => card.cost === i).length]);
    }

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
              <div className="columns">
                <div className="column is-8">
                  {deck.description === '' ? (
                    <DeckDesc desc="The author did not leave any recommendations. Do or do not, there is no try !" />
                  ) : (
                    <DeckDesc desc={deck.description} />
                  )}
                </div>
                <div className="column is-4">
                  <div className="box mana-curve">
                    <Chart width={400} height={400} series={chartData}>
                      <Layer width="100%" height="80%" position="middle center">
                        <Ticks
                          axis='x'
                          label={({index, props}) => props.series[0].data[0]}
                          labelStyle={{ textAnchor: 'middle', alignmentBaseline: 'before-edge', fontSize: '1.2em', fill: '#383838' }}
                          labelAttributes={{ y: 20 }}
                        />
                        <Bars
                          colors={['#1EC2A7']}
                          barWidth="9%"
                          innerPadding="2%"
                        />
                      </Layer>
                    </Chart>
                  </div>
                </div>
              </div>
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
