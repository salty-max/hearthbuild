const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Please enter an email address';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Please enter a password';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
