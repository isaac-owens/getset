const Validator = require("validator");
const validText = require('./valid-text');

module.exports = function validateHuntInput(data) {
    let errors = {};
    const title = validText(data.body.title) ? data.body.title : '';
    // files because multiple requests return images in files
    const photo_collection = (data.files) ? data.files : '';
    const category = validText(data.body.category) ? data.body.category : '';

    if (Validator.isEmpty(title)) {
        errors.title = 'Title can not be blank';
    }
    if (photo_collection.length === 0) {
        errors.photo_collection = 'Photo collection can not be empty';
    }
    if (Validator.isEmpty(category)) {
        errors.category = 'Category can not be blank';
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
