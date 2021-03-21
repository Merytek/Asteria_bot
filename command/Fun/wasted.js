const { error } = require("console");
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=wasted-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
        const WastedEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} a tué ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(WastedEmbed).catch(error)
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const WastedEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} se suicide 😭`)
                .setImage(gif)

            message.channel.send(WastedEmbed).catch(error)
        }
    }
    
}

module.exports.help = {
    name: 'wasted',
    alias: null,
    categorie: "fun",
    description: 'permet de tuer les gens du serveur MWAHAHAHAHAHAHA !',
    usage: "$wasted [user]",
    permission: null
};