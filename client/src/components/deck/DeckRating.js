import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import DeckLikeButton from './DeckLikeButton';

class DeckRating extends Component {
  constructor(props) {
    super(props);

    const { auth, likes, views } = this.props;

    this.state = {
      deckLikes: likes.length,
      deckViews: views,
      deckIsLiked: (likes.find(like => like.user === auth.user.id) === undefined) ? false : true,
    }
  }

  componentDidMount() {
    // set updated deck views value
    this.setState(prevState => ({
      deckViews: ++prevState.deckViews,
    }));
    
    // increment deck views on page display/refresh
    axios.post(`/api/decks/view/${this.props.deckId}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('Error when incrementing deck views');
      });
  }

  handleLikeBtn = (deckIsLiked) => () => {
    const { auth } = this.props;
    const action = deckIsLiked ? 'dislike' : 'like';

    // add or remove like depending on deckIsLiked value
    axios.post(`/api/decks/${action}/${this.props.deckId}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('Error when handling deck like');
      });

    this.setState(prevState => ({
      deckLikes: prevState.deckIsLiked ? --prevState.deckLikes : ++prevState.deckLikes,
      deckIsLiked: !deckIsLiked,
    }));
  }

  render() {
    const { deckLikes, deckViews, deckIsLiked } = this.state;
    const { auth, likes } = this.props;

    return (
      <div className="column is-3">
        <div className="box">
          <DeckLikeButton
            auth={auth}
            likes={likes}
            deckIsLiked={deckIsLiked}
            onBtnClick={this.handleLikeBtn}
          />
          <div className="deck--ratings">
            <div className="deck--rating">
              <span className=" tags has-addons">
                <span className="tag is-dark">
                  <span className="icon">
                    <i className="fas fa-thumbs-up" />
                  </span>
                </span>
                <span className="tag is-light">
                  {deckLikes}
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
                  {deckViews}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeckRating.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  views: PropTypes.number.isRequired,
};

export default DeckRating;
