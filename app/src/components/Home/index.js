import React from 'react';

import Banner from 'src/components/Shared/Banner';
import Sidebar from './Sidebar';
import DecksFilter from './DecksFilter';

const Home = () => (
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
          </div>
          <div className="column is-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
