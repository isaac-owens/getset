module.exports = function validateChallengeInput(data, hunt) {
    let errors = {};
    const images = data.files ? data.files : "";
    if (images.length === 0 || hunt.photo_collection.length !== images.length) {
        errors.images = 'You must upload the right number of images'
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}