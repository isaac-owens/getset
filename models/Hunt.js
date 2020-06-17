const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Add categories by default and use category id and user id
//get confirmation of photo_collection type
const HuntSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    close_date: {
        type: Date,
        required: true,
        default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) //need to find a way to test if this is right format/function
    },
    photo_collection: {
        type: String,
        required: true
    }
})
// category_id?
// Need to add some reward for winning?
module.exports = Hunt = mongoose.model("Hunt", HuntSchema);