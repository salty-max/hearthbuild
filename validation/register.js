const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  const errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : '';

  // name
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Please enter a name';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Please enter an email address';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Please enter a password';
  }

  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Please confirm password';
  }

  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
