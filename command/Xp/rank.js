const { MessageEmbed } = require('discord.js');
const { error } = require("console");
module.exports.run = (Root, message, args, dbUser) => {

    const UserRank = new MessageEmbed()

        .setColor(`#12A45F`)
        .setTitle(`niveau de ${message.author.username}`)
        .setDescription(`${message.author.username} est au niveau ${dbUser.level}\n${dbUser.experience}/${dbUser.requis}`)

    message.channel.send(UserRank)
    .catch(error);

}

module.exports.help = {
    name: "rank",
    alias: ["rank"],
    categorie: "xp",
    description: "Permet de voir le nombre d'Xp d'un utilisateur",
    permission: null
}