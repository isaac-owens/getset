const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ChallengeSchema = new Schema({
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

module.exports = Challenge = mongoose.model("Challenge", ChallengeSchema);



