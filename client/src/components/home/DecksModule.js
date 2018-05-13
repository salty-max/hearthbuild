import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../common/Spinner';

const DecksModule = ({ title, decks, loading }) => (
  <div className="box sidebar-item">
    <h3 className="sidebar-item--title is-size-5">{title}</h3>
    {loading ? (
      <Spinner />
    ) : 
      decks.map(deck => (
        <div key={deck._id} className="sidebar-item--list-item">
          <Link to={`/decks/${deck._id}`}>
            {deck.title}
          </Link>
        </div>
      )
    )}
  </div>
);

DecksModule.propTypes = {
  title: PropTypes.string.isRequired,
  decks: PropTypes.array.isRequired,
};

export default DecksModule;
