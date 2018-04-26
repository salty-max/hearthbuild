const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateDeckBuilderInput(data) {
  const errors = {};

  data.slug = !isEmpty(data.slug) ? data.slug : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.format = !isEmpty(data.format) ? data.format : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.class = !isEmpty(data.class) ? data.class : '';
  data.cost = !isEmpty(data.cost) ? data.cost : '';


  if (!Validator.isLength(data.slug, { min: 2, max: 40 })) {
    errors.slug = 'Slug must be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.slug)) {
    errors.slug = 'Please enter a slug';
  }

  if (!Validator.isLength(data.title, { min: 2, max: 100 })) {
    errors.title = 'Title must be between 2 and 100 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Please enter a title';
  }

  if (Validator.isEmpty(data.format)) {
    errors.format = 'Please choose a format';
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = 'Please choose a type';
  }

  if (Validator.isEmpty(data.class)) {
    errors.class = 'Please choose a class';
  }

  if (Validator.isEmpty(data.cost)) {
    errors.cost = 'Please choose a cost';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
