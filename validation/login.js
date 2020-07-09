const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

  if (!Validator.isLength(data.password, { min: 6, max: 12 })) {
    errors.password = "Password must be between 6 to 12 characters"
  }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}