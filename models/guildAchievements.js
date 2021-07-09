const mongoose = require("mongoose");

const GuildAchievSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    message_count: {
        "type": Number,
        "default": 0, 
    },
    chuck_norris: { 
        "type": Number,
        "default": 0,
    },
    typingTime: { 
        "type": Number,
        "default": 0,
    },
    young_Drawer: { 
        "type": Number,
        "default": 0,
    },
    suggestion: { 
        "type": Number,
        "default": 0,
    },
    level_up: { 
        "type": Number,
        "default": 0,
    },
    urano_metria: { 
        "type": String,
        "default": 0,
    },
    serial_killer: { 
        "type": Number,
        "default": 0,
    },
    shooter: { 
        "type": Number,
        "default": 0,
    },
    the_boxer: { 
        "type": Number,
        "default": 0,
    },
    serial_victim: { 
        "type": Number,
        "default": 0,
    },
    target: { 
        "type": Number,
        "default": 0,
    },
    punching_bag: { 
        "type": Number,
        "default": 0,
    },
    loved: { 
        "type": Number,
        "default": 0,
    },
    lover: { 
        "type": Number,
        "default": 0,
    },
    COFFEE: { 
        "type": Number,
        "default": 0,
    },
    pong: { 
        "type": Number,
        "default": 0,
    },
    lagggy: {  
        "type": Number,
        "default": 0,
    },
    NSFW: {  
        "type": Number,
        "default": 0,
    },
    First_message: { 
        "type": Number,
        "default": 0,
    },
    Where_all_things_begin: { 
        "type": Number,
        "default": 0,
    },
    WHELP: { 
        "type": Number,
        "default": 0,
    },
    answer: { 
        "type": Number,
        "default": 0,
    }
    
    
    
});

module.exports = mongoose.model("guildAchievements", GuildAchievSchema);