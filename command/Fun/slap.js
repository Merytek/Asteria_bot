const { get } = require("snekfetch");
const { error } = require("console");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=slap-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
        const SlapEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} met une baffe à ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(SlapEmbed).catch(error);
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const SlapEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} se baffe lui même ?-?`)
                .setImage(gif)

            message.channel.send(SlapEmbed).catch(error);
        }
    }
    
}

module.exports.help = {
    name: 'slap',
    alias: null,
    categorie: "fun",
    description: 'permet de baffer des gens du serveur !',
    usage: "$slap [user]",
    permission: null
};