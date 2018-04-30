import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/app.css';


import store from './store';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './containers/auth/Register';
import Footer from './components/layout/Footer';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Navbar />
            <Route exact path="/" component={Home} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
