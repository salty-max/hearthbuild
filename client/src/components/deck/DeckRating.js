import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class DeckRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckLikes: this.props.likes.length,
      deckViews: this.props.views,
    }
  }

  componentDidMount() {
    const { auth, likes } = this.props;
    let userHasLikedDeck = false;

    if (auth.isAuthenticated) {
      // userHasLikedDeck = likes.find(like => like.user === auth.user.id);
    }

    console.log(userHasLikedDeck);

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

  render() {
    const { deckLikes, deckViews } = this.state;

    return (
      <div className="column is-3">
        <div className="box">
          {this.props.auth.isAuthenticated ?
            <button className="button is-primary is-outlined is-medium deck--rating-btn">
              <span className="icon">
                <i className="fas fa-thumbs-up" />
              </span>
              <span>Like this deck</span>
            </button>
            :
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
          }
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
