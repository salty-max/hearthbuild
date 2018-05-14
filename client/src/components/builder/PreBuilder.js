import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import FormatRadio from './FormatRadio';
import AvatarClassRadio from './AvatarClassRadio';

class PreBuilder extends Component {
  constructor() {
    super();
    this.state = {
      format: '',
      hsClass: '',
      errors: {}
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { format, hsClass } = this.state;
    // Errors handling
    if (format === '') {
      this.setState({
        errors: {
          format: 'You must choose a format'
        }
      })
    }
    if (hsClass === '') {
      this.setState({
        errors: {
           class: 'You must choose a class'
        }
      })
    }

    // If form izoké
    if (hsClass !== '' && format !== '') {
      // Reset errors
      this.setState({
        errors: {}
      });
      // Send data to Redux
      this.props.actions.prebuild(format, hsClass);

      // Redirect to builder
      this.props.history.push('/builder');
    }
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <main>
        <section className="section" id="pre-builder">
          <div className="container">
            <div className="content">
              <h1 className="title">HearthBuilder</h1>
              <div style={{
                paddingBottom: '1em',
              }}>
                <p>Welcome to our deck builder. Here you can craft decks for every classes and for both standard and wild mode.</p>
              </div>
              {!this.props.isAuthenticated && (
                <div>
                  <p>First of all, you must be logged to craft a deck. If you don't have an account, please register.</p>
                  <p>As we are nice people, you just have to click one of those marvelous buttons</p>
                  <div className="buttons field is-grouped is-grouped-centered">
                    <div className="control">
                      <Link to="/register" className="button is-info is-outlined is-medium">
                        <span className="icon">
                          <i className="fas fa-user-plus"></i>
                        </span>
                        <span>Register</span>
                      </Link>
                    </div>
                    <div className="control">
                      <Link to="/login" className="button is-primary is-outlined is-medium">
                        <span className="icon">
                          <i className="fas fa-sign-in-alt"></i>
                        </span>
                        <span>Login</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="box">
              <h2 className="title is-size-4">Choose a format and a class</h2>
              <form onSubmit={this.onSubmit}>
                <div className="format">
                  <div className="field is-grouped is-grouped-centered">
                    <FormatRadio
                      format="standard"
                      label="Standard"
                      onChange={this.onChange}
                      checked={this.state.format === "standard"}
                    />
                    <FormatRadio
                      format="wild"
                      label="Wild"
                      onChange={this.onChange}
                      checked={this.state.format === "wild"}
                    />
                  </div>
                </div>
                {errors.format && (
                  <div className="notification is-danger">
                    {errors.format}
                  </div>
                )}
                <div className="classes">
                  {classes.map(hsClass => (
                    <AvatarClassRadio
                      key={hsClass.value}
                      hsClass={hsClass.value.toLowerCase()}
                      checked={this.state.hsClass === hsClass.label}
                      onChange={this.onChange}
                      label={hsClass.label}
                    />
                  ))}
                </div>
                {errors.class && (
                  <div className="notification is-danger">
                    {errors.class}
                  </div>
                )}
                <div className="field">
                  <button type="submit" className={classnames('button is-primary is-medium submit-button', {
                    'is-loading': this.props.cardsLoading
                  })}>Start a deck</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

PreBuilder.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  classes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default PreBuilder;