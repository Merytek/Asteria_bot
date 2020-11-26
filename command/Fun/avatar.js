const { MessageEmbed } = require("discord.js"); 

module.exports.run = (Root, message, args) => {
    const mention = message.mentions.members.first();

    if (!mention) {
        const Avatar = new MessageEmbed()

            .setColor("#12A0C6")
            .setTitle(`voici ta pp ${message.author.username}`)
            .setImage(message.author.displayAvatarURL())

        message.channel.send(Avatar)
    } else {
        if (mention) {
            const AvatarMention = new MessageEmbed()

                .setColor("#12A0C6")
                .setTitle(`voici la pp de ${mention.user.username}`)
                .setImage(mention.user.displayAvatarURL())

            message.channel.send(AvatarMention)
        }
    }
}

module.exports.help = {
    name: 'avatar',
    description: 'permet de voir ta pp ou la pp de n\'importe qui sur le serveur',
};