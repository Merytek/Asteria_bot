const { MessageEmbed } = require("discord.js"); 

//calcul % => 100*Vp/Vt => 100*GuildAchievement.<acv>/message.guild.memberCount

module.exports.run = async (Root, message, args) => {

    const Achievements = Root.getUserAchivement(message.member)

    for (let i = 0; i < Achievements.Achievement[0].length; i++) {
        message.channel.send(Achievements[i][2])
    }
    
}

module.exports.help = {
    name: 'profile',
    alias: null,
    categorie: "misc",
    description: 'Affiche ton profile ou celui d\'un autre utilisateur',
    usage: "$profile [user]",
    permission: null
};