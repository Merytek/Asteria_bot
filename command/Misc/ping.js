// JavaScript source code

module.exports.run = (Root, message, args) => {
    const moment = require("moment");
    const m = message.channel.send("Pinging !").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp;
        let botPing = Math.round(Root.pi);

        m.edit(`**pingpongping Pong ! ton ping est de: \n ${ping}ms**`);
    });
}

module.exports.help = {
    name: 'ping',
    description: 'Renvoie le temps de réponse du bot !',
};