const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateDeckBuilderInput(data) {
  const errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.type = !isEmpty(data.type) ? data.type : '';

  if (!Validator.isLength(data.title, { min: 2, max: 100 })) {
    errors.title = 'Title must be between 2 and 100 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Please enter a title';
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = 'Please choose a type';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
