import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Banner from '../common/Banner';
import Sidebar from './Sidebar';
import DecksFilter from '../../containers/home/DecksFilter';
import DeckListHeader from './DeckListHeader';
import DeckItem from './DeckItem';
import AdBanner from './AdBanner';
import Spinner from '../common/Spinner';

import isEmpty from '../../utils/is-empty';

import sortBy from '../../utils/sortBy';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      filters: {},
      currentPage: 1,
      decksPerPage: 5,
      sort: '-createdAt'
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return{
      currentDecks: nextProps.decks,
      filters: nextProps.filters
    };
  }

  // Handle decks filtering
  filterDecks = (arr) => {
    const { filters } = this.props;
    let filteredArr = arr;

    // If there is filters
    if (!isEmpty(filters)) {
      // Filter decks by title
      if (filters.title !== '') {
        filteredArr = filteredArr.filter(deck => deck.title.includes(filters.title))
      }
      // Filter decks by class
      if (filters.hsClass !== '') {
        filteredArr = filteredArr.filter(deck => deck.class === filters.hsClass)
      }
      // Filter decks by format
      if (filters.format !== '') {
        filteredArr = filteredArr.filter(deck => deck.format === filters.format)
      }
      // Filter decks by type
      if (filters.type !== '') {
        filteredArr = filteredArr.filter(deck => deck.type === filters.type)
      }
    }
    // If no filters set, return all decks
    return filteredArr;
  }

  handlePageClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  // Table sorting
  handleSortClick = (prop) => () => {
    this.setState({
      sort: prop
    });
  }

  render() {

    const { currentPage, decksPerPage, sort } = this.state;
    const { decks } = this.props;
    let paginatedDecks = [];
    let pageNumbers = [];

    // Id there is decks to display
    if (!this.props.decksLoading) {
      // PAGINATION
      // Logic for displaying current decks
      let filteredDecks = this.filterDecks(decks);
      const sortedDecks = filteredDecks.sort(sortBy(sort));
      const indexOfLastDeck = currentPage * decksPerPage;
      const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
      paginatedDecks = sortedDecks.slice(indexOfFirstDeck, indexOfLastDeck);

      // Logic for displaying page numbers
      for (let i = 1; i <= Math.ceil(sortedDecks.length / decksPerPage); i++) {
        pageNumbers.push(i);
      }
    }
    
    return (
      <div>
        <Banner
        title="Decks list"
        subtitle="Decks from the community"
        bannerClass="home-banner"
        />
        <main>
          <section className="section" id="home">
            <div className="container">
              <div className="columns is-desktop">
                <div className="column is-three-quarter-desktop">
                  <div className="deck-list">
                    <DecksFilter />
                    <div className="deck-list--table-wrapper">
                      <table className="table deck-list--table is-fullwidth is-striped is-hoverable">
                        <DeckListHeader
                          handleSortClick={this.handleSortClick} 
                        />
                        {this.props.decksLoading ? (
                          <tbody>
                            <tr>
                              <td colSpan="8">
                                <Spinner />
                              </td>
                            </tr>
                          </tbody>
                        ) : (
                          <tbody>
                            {paginatedDecks.map(deck => (
                              <DeckItem key={deck._id}{...deck} />
                            ))}
                          </tbody>
                        )}
                      </table>
                    </div>
                    <nav className="pagination is-centered">
                      <ul className="pagination-list">
                        {pageNumbers.map(n => (
                          <li key={n}>
                            <a
                              className={classnames('pagination-link', {
                                'is-current': n === this.state.currentPage
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
                <div className="column is-one-quarter-desktop">
                  <Sidebar decks={this.props.decks} loading={this.props.decksLoading} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filters: PropTypes.object.isRequired,
  decksLoading: PropTypes.bool.isRequired,
}

export default Home;
