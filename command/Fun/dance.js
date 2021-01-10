const { error } = require("console");
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=danse-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
        const danceEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} dance avec ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(danceEmbed).catch(error);
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const danceEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} danse alone`)
                .setImage(gif)

            message.channel.send(danceEmbed).catch(error);
        }
    }
    
}

module.exports.help = {
    name: 'dance',
    description: 'permet de dancer avec les gens du serveur !',
};