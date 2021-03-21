const { get } = require("snekfetch");
const { error } = require("console");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=punch-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
        const PunchEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} met une patate de forain à ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(PunchEmbed).catch(error)
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const PunchEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} se frappe lui même car il a été vilain 😏`)
                .setImage(gif)

            message.channel.send(PunchEmbed).catch(error)
        }
    }

    
}

module.exports.help = {
    name: 'punch',
    alias: null,
    categorie: "fun",
    description: 'permet de mettre une droite aux gens du serveur !',
    usage: "$punch [user]",
    permission: null
};