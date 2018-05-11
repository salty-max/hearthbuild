import React, { Component } from 'react';
import Moment from 'react-moment';

import Svg from '../common/Svg';
import ProfileDeck from './ProfileDeck';

class Profile extends Component {
  render() {
    const { user, decks } = this.props;
    const ownDecks = decks.filter(deck => deck.author._id === user.id);
    return (
      <div>
        <main>
          <section className="section" id="profile">
            <div className="container">
              <div className="profile-header">
                <img className="profile--avatar" src={user.avatar} alt={user.name} />
                <h1 className="profile--title" className="title">{user.name}</h1>
                <p className="profile--battlenet">
                  <Svg type="misc" value="battlenet" />
                  {user.battletag}
                </p>
                <p className="profile--date">Registered <Moment fromNow>{user.date}</Moment></p>
              </div>

              <div className="profile--decks">
                {ownDecks.map(ownDeck => (
                  <ProfileDeck deck={ownDeck} onDeleteClick={this.props.actions.deleteDeck} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Profile;
