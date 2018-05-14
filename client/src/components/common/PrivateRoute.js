/*
 * Prevent non authenticated user to go to URL
*/

import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // If a user is authenticated, let him go to this route
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
          // If not, send him back to login
          <Redirect to="/login" />
        )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
