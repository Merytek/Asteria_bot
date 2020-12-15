const { MessageEmbed } = require('discord.js');

module.exports.run = async (Root, message, args, dbUser) => {

    const UserRank = new MessageEmbed()

        .setColor(`#12A45F`)
        .setTitle(`niveau de ${message.author.username}`)
        .setDescription(`${message.author.username} est au niveau ${dbUser.level}\n${dbUser.experience}/${dbUser.requis}`)

    message.channel.send(UserRank)

}

module.exports.help = {
    name: "rank",
    description: "Permet de voir le nombre d'Xp d'un utilisateur"
}