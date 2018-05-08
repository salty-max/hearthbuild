import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DeckComment from './DeckComment';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import { format } from 'url';

class DeckComments extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      text: this.state.comment
    }

    this.props.actions.sendComment(newComment, this.props.deckId);

    this.setState({
      comment: ''
    });
  }

  render () {
    const { auth } = this.props;

    const authContent = (                    
      <div className="deck--comments-form">
        <form onSubmit={this.onSubmit}>
          <TextAreaFieldGroup
            name="comment"
            value={this.state.comment}
            onChange={this.onChange}
            placeholder="What do you want to complain about..."
          />
          <input type="submit" value="Send" className="button is-primary is-medium is-pulled-right" />
        </form>
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
      <div className="box deck--comments" style={{ overflow: 'hidden' }}>
        <div className="deck--comments-header">
        
          <h3 className="title deck--comments-header--title">
            Comments
          </h3>
          {!auth.isAuthenticated ? guestContent: ''}
        </div>

        {this.props.comments.length > 0 ?
          this.props.comments.map(comment => (
            <DeckComment key={comment._id} comment={comment} />
          ))
          : <div className="deck--comments-empty">There are no comments for this deck yet</div>
        }
        {auth.isAuthenticated ? authContent : ''}
      </div>
    );
  }
}

DeckComments.propTypes = {
  auth: PropTypes.object.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};

export default DeckComments;
