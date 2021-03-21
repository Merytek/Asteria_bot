const { error } = require("console");
module.exports.run = (Root, message, args) => {
    const m = message.channel.send("Pinging !").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp;

        m.edit(`*pingpongping* Pong ! ton ping est de: **${ping}**ms`);
    }).catch(error);
}

module.exports.help = {
    name: 'ping',
    alias: null,
    categorie: "misc",
    description: 'Renvoie le temps de réponse du bot !',
    usage: "$ping",
    permission: null
};