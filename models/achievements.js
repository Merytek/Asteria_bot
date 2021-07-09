const mongoose = require("mongoose");

const AchievSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    userID: String,
    username: String,
    Achievement: []
    /*
    [0, 1000000, "Trop de message", false],
    [0, 3, "Chuck Norris", false],
    [0, 1000, "Des heures d'activité", false],
    [0, 1, "Jeune dessinateur", false],
    [0, 1, "Laissez moi améliorer le serveur", false],
    [0, 100, "Pex like a god", false],
    [null, "Observe le ciel et ouvre-le. Par le scintillement de toutes les étoiles de l'univers. Montre-moi ton apparence. Ô Tetrabiblos, je suis la maîtresse des étoiles. Ouvre-moi les portes du tourment et de la perfection. Que les 88 étoiles des cieux s'éclairent maintenant. Urano Metria !", "Urano Metria", false],
    [0, 100, "Seria Killer", false],
    [0, 100, "Shooter", false],
    [0, 100, "The Boxer", false],
    [0, 100, "Serial Victime", false],
    [0, 100, "Cible", false],
    [0, 100, "Punching Bag", false],
    [0, 100, "Aimé", false],
    [0, 100, "Amoureux", false],
    [0, 100, "Âme cafféiné", false],
    [0, 100, "Pong", false],
    [0, 5000, "Lagggy", false],
    [0, 1, "NSFW", false],
    [0, 1, "Premiers pas", false],
    [0, 1, "Là où tout à commencé", false],
    [0, 1, "WHELP !", false],
    [null, "42", "La réponse", false]
    */
});

module.exports = mongoose.model("achievements", AchievSchema);
