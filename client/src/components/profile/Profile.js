import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { user, decks } = this.props;

    return (
      <div>
        <main>
          <section className="section" id="profile">
            <div className="profile-header">
              <img className="profile--avatar" src={user.avatar} alt={user.name}/>
              <h1 className="profile--title" className="title">{user.name}</h1>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Profile;
