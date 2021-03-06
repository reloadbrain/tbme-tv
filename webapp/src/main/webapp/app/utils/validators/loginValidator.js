'use strict'

import validator from 'validator';
import isEmpty from 'validate.io-empty';

export default function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
}