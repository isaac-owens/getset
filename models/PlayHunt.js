const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user, image, score, hunt_id, timestamp




const PlayHuntSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    hunt_id: {
        type: Schema.Types.ObjectId, 
        ref: 'hunts',
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    score: {
        type: Number
    },
    timestamps: {
        type: Date,
        default: Date.now 
    }
})

module.exports = PlayHunt = mongoose.model("PlayHunt", PlayHuntSchema);



