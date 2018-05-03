import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { setDecksLoading } from './actions/homeActions';
import { setCardsLoading } from './actions/builderActions';

import './styles/app.css';

import PrivateRoute from './components/common/PrivateRoute';


import store from './store';
import Navbar from './containers/layout/Navbar';
import Home from './containers/home/Home';
import DeckSingle from './components/deck/DeckSingle';
import DeckBuilder from './containers/builder/DeckBuilder';
import PreBuilder from './containers/builder/PreBuilder';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Footer from './components/layout/Footer';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location = '/login';
  }
}

store.dispatch(setDecksLoading());
store.dispatch(setCardsLoading());

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Navbar />
            <Route exact path="/" component={Home} />
            <div className="container app-content">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/deck" component={DeckSingle} />
              <Route exact path="/pre-builder" component={PreBuilder} />
              <Switch>
                <PrivateRoute exact path="/builder" component={DeckBuilder} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
