 // import React from 'react';
import React, { Component } from 'react';

import Banner from '../common/Banner';
import Sidebar from './Sidebar';
import DecksFilter from './DecksFilter';
import DeckSelectionBoard from './DeckSelectionBoard';

import axios from 'axios';



class Home extends Component {
  constructor () {
    super();
      this.state = {
        decks: [],
        };
      }

componentDidMount() {
  this.getDeckTest();
    }

getDeckTest = () => {
  axios.get('/api/decks')
    .then(res => {
      this.setState({
        decks: res.data,
          })
          console.log(res.data);
      });
    }

render () {
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
                <DecksFilter />
                {this.state.decks.map(deck => (
                <DeckSelectionBoard  key={deck.author}{...deck} />
                  ))}
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
