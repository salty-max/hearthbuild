import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'redux';
import { Router } from 'react-router';

import App from 'src/components/App';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.querySelector('#root'),
  );
});
