const { get } = require("snekfetch");
const { error } = require("console");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=kiss-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
        const KissEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} fait un bisous à ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(KissEmbed)
        .catch(error);
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const KissEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} s'embrasse lui même ;-;`)
                .setImage(gif)

            message.channel.send(KissEmbed)
            .catch(error);
        }
    }

    
}

module.exports.help = {
    name: 'kiss',
    alias: null,
    description: 'permet de faire un bisous aux gens du serveur !',
    usage: "$kiss [user]",
    permission: null
};