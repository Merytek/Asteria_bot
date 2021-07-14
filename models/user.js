const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    userID: String,
    username: String,
    experience: {
        "type": Number,
        "default": 0
    },
    level: {
        "type": Number,
        "default": 0
    },
    requis: {
        "type": Number,
        "default": 25
    },
    pos: {
        "type": Number,
        "default": 6
    }
});

module.exports = mongoose.model("User", userSchema);