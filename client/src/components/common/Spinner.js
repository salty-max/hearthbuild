/*
 * Spinner for loadings
*/

import React from 'react';

import spinner from '../../assets/img/spinner.gif';

const Spinner = () => (
  <img
    src={spinner}
    alt="Loading..."
    style={{
      width: '80px',
      margin: 'auto',
      display: 'block'
    }}
  />
);

export default Spinner;