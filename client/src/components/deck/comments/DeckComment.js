import React from 'react';
import PropTypes from 'prop-types';

const DeckComment = ({ comment }) => (
  <article className="media deck--comments-comment">
    <figure className="media-left">
      <div className="image is-64x64 deck-comments-comment--avatar">
        <img src={comment.user.avatar} alt={comment.user.name} />
      </div>
    </figure>
    <div className="media-content">
      <div className="content">
        <p className="deck--comments-comment--username"><strong>{comment.user.name}</strong></p>
        <p className="deck--comments-comment-content">{comment.text}</p>
      </div>
    </div>
  </article>
);

DeckComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default DeckComment;
