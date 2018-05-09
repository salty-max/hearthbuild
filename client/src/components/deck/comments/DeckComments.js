import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DeckComment from './DeckComment';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';

class DeckComments extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      currentPage: 1,
      commentsPerPage: 5,
    }
  }

  handlePageClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
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
    const { currentPage, commentsPerPage } = this.state;
    const { comments } = this.props;
    let currentComments = [];
    let pageNumbers = [];

    // Logic for displaying current comments
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

    // Logic for displaying page numbers
    for(let i = 1; i <= Math.ceil(comments.length / commentsPerPage); i++) {
      pageNumbers.push(i);
    }

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

          <nav className="pagination is-centered">
            <ul className="pagination-list">
              {pageNumbers.map(n => (
                <li key={n}>
                  <a
                    className={classnames('pagination-link', {
                      'is-current': n === currentPage
                    })}
                    id={n}
                    onClick={this.handlePageClick}
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {currentComments.length > 0 ?
          currentComments.map(comment => (
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
