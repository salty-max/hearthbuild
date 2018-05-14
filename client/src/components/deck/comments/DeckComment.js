import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Formatizer } from 'formatizer';

const DeckComment = ({ comment }) => (
  <article className="media deck--comments-comment">
    <figure className="media-left">
      <div className="image is-64x64 deck-comments-comment--avatar">
        <img src={comment.avatar} alt={comment.name} />
      </div>
    </figure>
    <div className="media-content">
      <div className="content">
        <div className="deck--comments-comment--username">
          <strong>{comment.name}</strong>
          <div className="deck--comments-comment--date is-hidden-mobile">
            <Moment fromNow>{comment.date}</Moment>
          </div>
        </div>
        <div className="deck--comments-comment--content">
          {/* Allow use of emojis. Thanks to Alex <3 */}
          <Formatizer>{comment.text}</Formatizer>
        </div>
      </div>
    </div>
  </article>
);

DeckComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default DeckComment;
