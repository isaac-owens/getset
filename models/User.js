const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    my_challenges: {
        type: Array,
    },
    my_played_challenges: {
        type: Array
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model("User", UserSchema);