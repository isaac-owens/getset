const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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
        default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) 
        //defaults to add a week from now
    },
    photo_collection: {
        type: Array,
        required: true
    },
    winner: {
        type: Object,
        default: {
            "user_id": '',
            "score": 0
        }
    }
})
module.exports = Hunt = mongoose.model("Hunt", HuntSchema);