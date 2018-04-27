import React from 'react';

const Header = () => (
  <nav className="navbar is-light">
    <div className="container">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src="img/hearthbuild-logo-150.png" alt="" className="brand-logo" />
        </a>
        <div className="navbar-burger">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#" className="navbar-link">Decks</a>
            <div className="navbar-dropdown">
              <a href="" className="navbar-item">Shaman</a>
              <a href="" className="navbar-item">Rogue</a>
              <a href="" className="navbar-item">Warrior</a>
              <a href="" className="navbar-item">Mage</a>
              <a href="" className="navbar-item">Hunter</a>
              <a href="" className="navbar-item">Paladin</a>
              <a href="" className="navbar-item">Priest</a>
              <a href="" className="navbar-item">Warlock</a>
              <a href="" className="navbar-item">Druid</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="pre-builder.html" className="button is-primary">
              <span className="icon">
                <i className="fas fa-plus-circle" />
              </span>
              <span>Create a deck</span>
            </a>
          </div>
          <div className="navbar-item">
            <a href="register.html" className="button is-info is-outlined">
              <span className="icon">
                <i className="fas fa-user-plus" />
              </span>
              <span>Register</span>
            </a>
          </div>
          <div className="navbar-item">
            <a href="login.html" className="button is-primary is-outlined">
              <span className="icon">
                <i className="fas fa-sign-in-alt" />
              </span>
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
