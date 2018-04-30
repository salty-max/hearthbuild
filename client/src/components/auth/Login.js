import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      console.log('coucou');
      this.props.history.push('/');
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();

    const userData = { email, password };

    this.props.actions.loginUser(userData);
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <section className="section" id="login">
        <div className="container">
          <div className="box">
            <form className="form" onSubmit={this.onSubmit}>
              <h1 className="title">Login</h1>
              <TextFieldGroup
                name="email"
                type="email"
                label="Email Address"
                icon="fas fa-envelope"
                error={errors.email}
                value={email}
                onChange={this.onChange}
              />
              <TextFieldGroup
                name="password"
                type="password"
                label="Password"
                icon="fas fa-envelope"
                error={errors.password}
                value={password}
                onChange={this.onChange}
              />
              <p>Don't have an account, register <Link to="/register" className="has-text-primary">here</Link></p>
              <div className="field">
                <input type="submit" value="Submit" className="button is-primary is-outlined is-medium" />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
}

export default Login;
