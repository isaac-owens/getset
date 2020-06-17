const Validator = require("validator");
const validText = require('./valid-text');

module.exports = function validateHuntInput(data) {
    let errors = {};

    const title = validText(data.title) ? data.title : '';
    const photo_collection = validText(data.photo_collection) ? data.photo_collection : '';
    const category = validText(data.category) ? data.category : '';

    if (Validator.isEmpty(title)) {
        errors.title = 'title can not be blank';
    }
    if (Validator.isEmpty(photo_collection)) {
        errors.photo_collection = 'photo_collection can not be blank';
    }
    if (Validator.isEmpty(category)) {
        errors.category = 'category can not be blank';
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

// title, category, user, start_date, close_date, photo_collection
// user and category are imported so no validating
// start date is a function for now so no validating and close date is set as a week
// validate title, photo_collection
