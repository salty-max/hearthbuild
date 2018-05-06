import React from 'react';
import PropTypes from 'prop-types';

const DeckDesc = ({ desc }) => (
  <div className="deck--desc">
    <div className="content">
      <h3>How to play this deck</h3>
      <p>{desc}</p>
    </div>
  </div>
);

DeckDesc.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default DeckDesc;
