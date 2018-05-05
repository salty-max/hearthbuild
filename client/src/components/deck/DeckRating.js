import React from 'react';
import PropTypes from 'prop-types';

const DeckRating = ({ likes }) => (
  <div className="column is-3">
    <div className="box">
      <button className="button is-primary is-outlined is-medium deck--rating-btn">
        <span className="icon">
          <i className="fas fa-thumbs-up" />
        </span>
        <span>Like this deck</span>
      </button>
      <div className="deck--ratings">
        <div className="deck--rating">
          <span className=" tags has-addons">
            <span className="tag is-dark">
              <span className="icon">
                <i className="fas fa-thumbs-up" />
              </span>
            </span>
            <span className="tag is-light">
              {likes.length}
            </span>
          </span>
        </div>
        <div className="deck--views">
          <span className="views tags has-addons">
            <span className="tag is-medium-mobile is-dark">
              <span className="icon">
                <i className="fas fa-eye" />
              </span>
            </span>
            <span className="tag is-medium-mobile is-light">
              6000
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

DeckRating.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DeckRating;
