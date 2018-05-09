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
      currentDecks: [],
      pageNumbers: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentDecks: nextProps.decks
    });
  }

  componentWillMount() {
    this.paginate();
  }

  paginate = () => {
    
  }

  handlePageClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  handleSortClick = (prop) => () => {
    console.log(prop);
    const { currentDecks } = this.state;
    currentDecks.sort(sortBy(prop));

    this.setState({
      currentDecks
    });
  }

  render() {

    const { currentPage, decksPerPage, currentDecks } = this.state;
    let paginatedDecks = [];

    console.log('if');
    // Logic for displaying current decks
    const indexOfLastDeck = currentPage * decksPerPage;
    const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
    paginatedDecks = currentDecks.slice(indexOfFirstDeck, indexOfLastDeck);

    // Logic for displaying page numbers
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(currentDecks.length / decksPerPage); i++) {
      pageNumbers.push(i);
      console.log(pageNumbers);
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
                    <DeckListHeader
                      handleSortClick={this.handleSortClick} 
                    />
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
                        {paginatedDecks.map(deck => (
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
              <div className="column is-3">
                <Sidebar decks={this.props.decks} loading={this.props.decksLoading} />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Home;
