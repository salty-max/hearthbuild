import React from 'react';
import PropTypes from 'prop-types';

const DecksModule = ({ title, decks }) => (
  <div className="box sidebar-item">
    <h3 className="sidebar-item--title is-size-5">{title}</h3>
    {decks.map(deck => (
      <div key={deck.id} className="sidebar-item--list-item">{deck.title}</div>
    ))}
  </div>
);

DecksModule.propTypes = {
  title: PropTypes.string.isRequired,
  decks: PropTypes.array.isRequired,
};

export default DecksModule;
