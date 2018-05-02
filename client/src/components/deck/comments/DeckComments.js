import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DeckComment from './DeckComment';

const DeckComments = ({ comments }) => (
  <div className="box deck--comments">
    <div className="deck--comments-header">
      <h3 className="title deck--comments-header--title">
        Comments
      </h3>
      <div className="deck--comments-header-login">
        <span className="subtitle">You must be logged in</span>
        <Link className="button is-dark is-outlined" to="/login">
          <span className="icon">
            <i className="fas fa-sign-in-alt" />
          </span>
          <span>Login</span>
        </Link>
      </div>
    </div>
    {comments.map(comment => (
      <DeckComment key={comment._id} comment={comment} />
    ))}
  </div>
);

DeckComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DeckComments;
