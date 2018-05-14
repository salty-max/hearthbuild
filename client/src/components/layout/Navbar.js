import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import HBLogo from '../../assets/img/hearthbuild-logo-150.png';

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      isActive: false
    }
  }

  onLogoutClick = () => {
    // Delete auth key and user from Redux
    this.props.actions.logoutUser();
    // Redirect to login page
    window.location = '/login';
  }

  // Menu collapsing in responsive
  menuActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  // Retract menu
  hideMenu = () => {
    this.setState({
      isActive: false
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    // If user is connected, display profile link and logout button
    const authLinks = (
      <Fragment>
        <div className="navbar-item profile-item">
          <img
            src={user.avatar}
            alt={user.name}
            className="image"
            style={{
              width: '32px',
              maxHeight: '32px',
              borderRadius: '50%',
              marginRight: '.5em'
            }}
          />
          <Link onClick={this.hideMenu} to="/profile">{user.name}</Link>
        </div>
        <div className="navbar-item">
          <a className="button is-danger is-outlined" onClick={() => {
            this.onLogoutClick()
            this.hideMenu()
          }}>
            <span className="icon">
              <i className="fas fa-sign-out-alt" />
            </span>
            <span>Logout</span>
          </a>
        </div>
      </Fragment>
    );

    // If user is not connected, display register and login button
    const guestLinks = (
      <Fragment>
        <div className="navbar-item">
          <Link to="/register" className="button is-info is-outlined" onClick={this.hideMenu}>
            <span className="icon">
              <i className="fas fa-user-plus" />
            </span>
            <span>Register</span>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/login" className="button is-primary is-outlined" onClick={this.hideMenu}>
            <span className="icon">
              <i className="fas fa-sign-in-alt" />
            </span>
            <span>Login</span>
          </Link>
        </div>
      </Fragment>
    );

    return (
      <nav className="navbar is-light">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={HBLogo} alt="" className="brand-logo" onClick={this.hideMenu}/>
        </Link>
        <div className="navbar-burger" onClick={this.menuActive}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div className={classnames('navbar-menu', { 'is-active': this.state.isActive })}>
        {/* <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="" className="navbar-link">Decks</a>
            <div className="navbar-dropdown">
              {this.props.home.classes.map(hsClass => (
                <a key={hsClass.value} className="navbar-item" onClick={this.hideMenu}>
                  {hsClass.label}
                </a>
              ))}
            </div>
          </div>
        </div> */}
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/pre-builder" className="button is-primary" onClick={this.hideMenu}>
              <span className="icon">
                <i className="fas fa-plus-circle" />
              </span>
              <span>Create a deck</span>
            </Link>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </div>
  </nav>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
}

export default Navbar;
