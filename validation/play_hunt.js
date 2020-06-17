// const Validator = require("validator");
// const validText = require('./valid-text');
// const Hunt = require("../models/Hunt");



// module.exports = function validatePlayHuntInput(data) {
//     let errors = {};

//     const images = data.images.length ? data.images : "";
//     const hunt_images = Hunt.findById(data.hunt_id)
//     .then(hunt => {
//         if (Validator.isEmpty(images) && hunt.photo_collection.length !== images.length) {
//             errors.images = 'You must upload an image'
//             return {
//                 errors,
//                 isValid: Object.keys(errors).length === 0
//             }
//         }
//     })

//     return hunt_images;
    
// }

const Validator = require("validator");
const validText = require('./valid-text');
const Hunt = require("../models/Hunt");
module.exports = function validatePlayHuntInput(data, hunt) {
    let errors = {};
    const images = data.images ? data.images : "";
    if (images.length === 0 || hunt.photo_collection.length !== images.length) {
        errors.images = 'You must upload the right number of images'
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}