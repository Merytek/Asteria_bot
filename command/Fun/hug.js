const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=hug-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
        const HugEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} fait un câlin à ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(HugEmbed)
        .catch(error);
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const HugEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} se fait un câlin à lui même`)
                .setImage(gif)

            message.channel.send(HugEmbed)
            .catch(error);
        }
    }

    
}

module.exports.help = {
    name: 'hug',
    alias: null,
    description: 'permet de faire un câlin aux gens du serveur !',
    usage: "$hug [user]",
    permission: null
};