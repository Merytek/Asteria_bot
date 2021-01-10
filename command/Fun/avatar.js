const { MessageEmbed } = require("discord.js"); 
const { error } = require("console");
module.exports.run = (Root, message, args) => {
    const mention = message.mentions.members.first();

    if (!mention) {
        const Avatar = new MessageEmbed()

            .setColor("#12A0C6")
            .setTitle(`voici ta pp ${message.author.username}`)
            .setImage(message.author.displayAvatarURL())

        message.channel.send(Avatar)
        .catch(error);
    } else {
        if (mention) {
            const AvatarMention = new MessageEmbed()

                .setColor("#12A0C6")
                .setTitle(`voici la pp de ${mention.user.username}`)
                .setImage(mention.user.displayAvatarURL())

            message.channel.send(AvatarMention)
            .catch(error);
        }
    }
}

module.exports.help = {
    name: 'avatar',
    alias: "pp",
    description: 'permet de voir ta pp ou la pp de n\'importe qui sur le serveur',
    usage: "$avatar [user]",
    permission: null
};