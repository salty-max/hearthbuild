/*
 * Set auth token for every request to backend
*/


import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply to every requests
    axios.defaults.headers.common['Authorization'] = token;
  }
  else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;