import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const DeckLikeButton = ({ auth, likes, deckIsLiked, onBtnClick }) => {
  // If user is connected
  if (auth.isAuthenticated) {
    return (
      // Change button color and text depending if its like or dislike
      <button
        className={classnames('button is-primary is-outlined is-medium deck--rating-btn', {
          'is-primary': !deckIsLiked,
          'is-danger': deckIsLiked,
        })}
        onClick={onBtnClick(deckIsLiked)}
      >
        <span className="icon">
          <i className={classnames('fas', {
              'fa-thumbs-up': !deckIsLiked,
              'fa-thumbs-down': deckIsLiked,
            })}
          />
        </span>
        <span>{deckIsLiked ? 'Dislike' : 'Like'}</span>
      </button>
    );
  }
  // If user is not connected, disable button
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
        <span>Like</span>
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
