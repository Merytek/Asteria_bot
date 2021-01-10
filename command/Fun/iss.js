const {error} = require("console");
const { MessageEmbed } = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (Root, message, args) => {
    const { body } = await get("https://api.wheretheiss.at/v1/satellites/25544");
    let latitude = body["latitude"];
    let longitude = body["longitude"];
    let altitude = body["altitude"];
    let velocity = body["velocity"];

    const ISSEmbed = new MessageEmbed()

        .setColor('#FA451')
        .setTitle(`voici la position actuelle de l'ISS ${message.author.username}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/752926441565323265/797821740465782815/2Q.png")
        .addField("latitude:", latitude, true)
        .addField("longitude:", longitude, true)
        .addField("altitude:", altitude, true)
        .addField("rapidité:", velocity)
        .setTimestamp()
        .setFooter("information sur l'ISS")

    message.channel.send(ISSEmbed).catch(error)


}

module.exports.help = {
    name: 'iss',
    alias: null,
    description: 'Renvoie la position de l\'ISS en temps réel',
    usage: "$iss",
    permission: null
};


