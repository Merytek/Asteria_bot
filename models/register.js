const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    userID: String,
    username: String,
    name: {
        "type": String,
        "default": null
    },

    bracket: {
        "type": Array,
        "default": null
    },

    avatar: {
        "type": String,
        "default": null
    }
    
});

module.exports = mongoose.model("register", userSchema);