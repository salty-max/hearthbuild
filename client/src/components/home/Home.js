// import React from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';

import Banner from '../common/Banner';
import Sidebar from './Sidebar';
import DecksFilter from './DecksFilter';
import DeckListHeader from './DeckListHeader';
import DeckItem from './DeckItem';
import AdBanner from './AdBanner';
import Spinner from '../common/Spinner';

import sortBy from '../../utils/sortBy';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
      },
      currentPage: 1,
      decksPerPage: 10,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      //filters: nextProps.filters
    })
  }

  handlePageClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  onClick = () => {
    const decksToShow = this.props.decks;
    // decksToShow.sort(sortBy('title'));
     decksToShow.sort(sortBy('user'));
   }

  render() {
    const { currentPage, decksPerPage } = this.state;
    const { decks } = this.props;
    let currentDecks = [];
    let pageNumbers = [];

    if (!this.props.decksLoading) {
      // Logic for displaying current decks
      const indexOfLastDeck = currentPage * decksPerPage;
      const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
      currentDecks = decks.slice(indexOfFirstDeck, indexOfLastDeck);

      // Logic for displaying page numbers
      pageNumbers = [];
      for(let i = 1; i <= Math.ceil(decks.length / decksPerPage); i++) {
        pageNumbers.push(i);
      }
    }

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
                    <DeckListHeader onClick={this.onClick}  />
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
                        {currentDecks.map(deck => (
                          <DeckItem key={deck._id}{...deck} />
                        ))}
                      </tbody>
                    )}
                  </table>
                  <nav className="pagination is-centered">
                    <ul className="pagination-list">
                      {pageNumbers.map(n => (
                        <li key={n}>
                          <a
                            className={classnames('pagination-link', {
                              'is-current': n === currentPage
                            })}
                            id={n}
                            onClick={this.handlePageClick}
                          >
                            {n}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
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
