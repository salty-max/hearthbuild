import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DeckComment from './DeckComment';

const DeckComments = ({ auth, comments }) => {
  const authContent = (
    <div className="deck--comments-header-login">
      <button className="button is-primary is-outlined">
        <span className="icon">
          <i className="fas fa-plus-circle" />
        </span>
        <span>Add a new comment</span>
      </button>
    </div>
  );

  const guestContent = (
    <div className="deck--comments-header-login">
      <span className="subtitle">You must be logged in to add a new comment</span>
      <Link className="button is-dark is-outlined" to="/login">
        <span className="icon">
          <i className="fas fa-sign-in-alt" />
        </span>
        <span>Login</span>
      </Link>
    </div>
  );

  return (
    <div className="box deck--comments">
      <div className="deck--comments-header">
        <h3 className="title deck--comments-header--title">
          Comments
        </h3>
        {auth.isAuthenticated ? authContent : guestContent}
      </div>
      {comments.length > 0 ?
        comments.map(comment => (
          <DeckComment key={comment._id} comment={comment} />
        ))
        : <div className="deck--comments-empty">There are no comments for this deck yet</div>
      }
    </div>
  );
}

DeckComments.propTypes = {
  auth: PropTypes.object.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DeckComments;
