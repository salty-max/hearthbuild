import React from 'react';
import PropTypes from 'prop-types';

const DeckLikeButton = ({ auth, likes, deckIsLiked, onBtnClick }) => {
  if (auth.isAuthenticated) {
    if (!deckIsLiked) {
      return (
        <button
          className="button is-primary is-outlined is-medium deck--rating-btn"
          onClick={onBtnClick(deckIsLiked)}
        >
          <span className="icon">
            <i className="fas fa-thumbs-up" />
          </span>
          <span>Like this deck</span>
        </button>
      );
    }
    else {
      return (
        <button
          className="button is-danger is-outlined is-medium deck--rating-btn"
          onClick={onBtnClick(deckIsLiked)}
        >
          <span className="icon">
            <i className="fas fa-thumbs-down" />
          </span>
          <span>Dislike this deck</span>
        </button>
      );
    }
  }
  else {
    return (
      <button
        className="button is-primary is-outlined is-medium tooltip deck--rating-btn"
        data-tooltip="You must be logged in to like this deck"
        disabled
      >
        <span className="icon">
          <i className="fas fa-thumbs-up" />
        </span>
        <span>Like this deck</span>
      </button>
    );
  }
}

DeckLikeButton.propTypes = {
  auth: PropTypes.object.isRequired,
  likes: PropTypes.arrayOf(PropTypes.object).isRequired,
  deckIsLiked: PropTypes.bool.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default DeckLikeButton;
