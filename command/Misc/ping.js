const { MessageEmbed } = require("discord.js");

module.exports.run = async (Root, message, args) => {

    const pingEmbed = new MessageEmbed()

        .setTitle("*pinging...*")
        .setColor("#AE143C")
        .setTimestamp()


    await message.channel.send(pingEmbed).then(async m => {
        const pingAPI = m.createdTimestamp - message.createdTimestamp;
        const pingWebSocket = Root.ws.ping;

        const EditPingEmbed = new MessageEmbed()
            .setTitle("PONG !")
            .setColor("GREEN")
            .addField("Latence du WebSocket:", `${pingWebSocket}ms`)
            .addField("Latence de l'API:", `${pingAPI}ms`)
            .setTimestamp()
        m.edit(EditPingEmbed);
    }).catch(console.error);
}

module.exports.help = {
    name: 'ping',
    alias: null,
    categorie: "misc",
    description: 'Renvoie le temps de réponse du bot !',
    usage: "$ping",
    permission: null
};