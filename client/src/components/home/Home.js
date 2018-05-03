// import React from 'react';
import React, { Component } from 'react';

import Banner from '../common/Banner';
import Sidebar from './Sidebar';
import DecksFilter from './DecksFilter';
import DeckListHeader from './DeckListHeader';
import DeckItem from './DeckItem';
import AdBanner from './AdBanner';
import Spinner from '../common/Spinner';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      decks: [],
      filters: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      decks: nextProps.decks,
    })
  }

  render() {
    return (
      <main>
        <Banner
          title="Decks list"
          subtitle="Decks from the community"
        />
        <section className="section" id="home">
          <div className="container">
            <div className="columns">
              <div className="column is-9">
                <div className="deck-list">
                  <DecksFilter />
                  <table className="table deck-list--table is-fullwidth is-striped is-hoverable">
                    <DeckListHeader />
                    {this.props.decksLoading ? (
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <Spinner />
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {this.state.decks.map(deck => (
                          <DeckItem key={deck._id}{...deck} />
                        ))}
                      </tbody>
                    )}
                  </table>
                </div>
                <AdBanner />
              </div>
              <div className="column is-3">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Home;
