import React, { Component } from 'react';
import Moment from 'react-moment';
import classnames from 'classnames';

import Svg from '../common/Svg';
import Spinner from '../common/Spinner';
import ProfileDeck from './ProfileDeck';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      modalActive: false
    }
  }

  // MODAL HANDLING
  openModal = () => {
    this.setState({
      modalActive: true
    });
  }

  closeModal = () => {
    this.setState({
      modalActive: false
    });
  }

  render() {
    const { user, decks, decksLoading } = this.props;
    let decksView = null;
    
    // Wait for decks to load
    if (decksLoading) {
      decksView = (<Spinner />)
    }
    else {
      // Display only user's decks
      const ownDecks = decks.filter(deck => deck.author._id === user.id);

      // If there is no deck to display
      if(ownDecks.length === 0) {
        decksView = (
          <div className="empty">
            <h2>You have not created any deck yet</h2>
          </div>  
        )
      }
      else {
        decksView = (
          ownDecks.map(ownDeck => (
            <ProfileDeck key={ownDeck._id} deck={ownDeck} onDeleteClick={this.props.actions.deleteDeck} />
          ))
        )
      }
    }

    return (
      <div>
        <main>
          <section className="section" id="profile">
            <div className="container">
              <div className="profile-header">
                <img className="profile--avatar" src={user.avatar} alt={user.name} />
                <div>
                  <h1 className="title profile--title">{user.name}</h1>
                  <p className="profile--battlenet">
                    <Svg type="misc" value="battlenet" />
                    {user.battletag ? user.battletag : 'N/A'}
                  </p>
                  <p className="profile--date"><span>Registered <Moment fromNow>{user.date}</Moment></span></p>
                </div>
              </div>

              <div className="profile--decks">
                {decksView}
              </div>
              <button className="button is-danger is-fullwidth is-medium user-delete-btn" onClick={this.openModal}>Delete my account</button>
            </div>
          </section>
        </main>

        <div className={classnames('modal', {
          'is-active': this.state.modalActive
        })}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <article className="message is-light">
              <div className="message-header">
                <p>Are you sure you want to delete your account ? We will miss you !</p>
                <div className="buttons">
                  <button className="button is-dark is-outlined" onClick={this.closeModal}>Cancel</button>
                  <button className="button is-danger" onClick={() => this.props.actions.deleteUser(user.id)}>Confirm</button>
                </div>
              </div>
            </article>
          </div>
          <button onClick={this.closeModal} className="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    )
  }
}

export default Profile;
