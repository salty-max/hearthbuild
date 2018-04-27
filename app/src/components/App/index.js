import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Login from 'src/components/Login';
import Register from 'src/components/Register';

const App = () => (
  <div id="app">
    <Header />
    <Home />
    <Login />
    <Register />
    <Footer />
  </div>
);

export default App;
