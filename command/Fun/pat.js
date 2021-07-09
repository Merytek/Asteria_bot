const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=pat-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
        const patEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} pat ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(patEmbed)
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const patEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} se pat lui même :c`)
                .setImage(gif)

            message.channel.send(patEmbed)
        }
    }
}

module.exports.help = {
    name: "pat",
    alias: null,
    categorie: "fun",
    description: "Cette commande permet de pat un utilisateur",
    usage: "$pat [user]",
    permission: null
}