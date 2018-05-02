import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import defaultAvatar from '../../../assets/img/misc/misc-default-avatar.jpg';

class DeckComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentAuthor: '',
    };
  }

  componentDidMount() {
    this.getAuthorName(this.props.comment.user);
  }

  // Get comment author name by id
  getAuthorName = (id) => {
    axios.get(`/api/users/id/${id}`)
    .then(res => {
      this.setState({
        commentAuthor: res.data.name,
      })
    });
  }

  render() {
    return (
      <article className="media deck--comments-comment">
        <figure className="media-left">
          <p className="image is-64x64 deck-comments-comment--avatar">
            <img src={defaultAvatar} alt="" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="deck--comments-comment--username"><strong>{this.state.commentAuthor}</strong></p>
            <p className="deck--comments-comment-content">{this.props.comment.text}</p>
          </div>
        </div>
      </article>
    );
  }
}

DeckComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default DeckComment;
