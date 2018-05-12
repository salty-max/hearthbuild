import React, { Component } from 'react';
import Moment from 'react-moment';

import Svg from '../common/Svg';
import Spinner from '../common/Spinner';
import ProfileDeck from './ProfileDeck';

class Profile extends Component {

  render() {
    const { user, decks, decksLoading } = this.props;
    let decksView = null;
    
    if (decksLoading) {
      decksView = (<Spinner />)
    }
    else {
      const ownDecks = decks.filter(deck => deck.author._id === user.id);

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
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Profile;
