const { MessageEmbed } = require("discord.js");

module.exports = async (Root, member) => {
    const welcomeEmbed = new MessageEmbed()

        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor('#35f093')
        .setFooter("Un nouveau member a rejoint le serveur")
        .setTimestamp()

    Root.channels.cache.get("747459650890498059").send({ embed: welcomeEmbed })

    const newUser = {
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        username: member.user.tag,
    }

    await Root.createUser(newUser)
}