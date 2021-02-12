const { MessageEmbed } = require("discord.js");

module.exports = (Root, member) => {
    const ByeEmbed = new MessageEmbed()
    
        .setColor('#dc143c')
        .setTitle(`__${member.user.username} a quitté le serveur__`)
        .setDescription(`disons au revoir à cette jeune personne partie trop tôt 😭`)
        .setFooter("un utilisateur a quitté le serveur")
        .setTimestamp()
    
    Root.channels.cache.get("747459650890498060").send({ embed: ByeEmbed });

}
