const { MessageEmbed } = require("discord.js");

module.exports = async (Root, member) => {
    const welcomeEmbed = new MessageEmbed()

        .setColor('#A23C10')
        .setTitle(`__Souhaitez la bienvenue à ${member.user.username}__`)
        .setDescription(`Bienvenue ${member.user.username} j'espère que tu te plairas ici je te demanderais seulement d'aller valider le <#747459650890498062> avant toute chose ensuite tu pourras si le coeur t'en dit choisir tes rôles dans le <#747459651230236724> et même faire ta présentation dans le <#756827158332178462>`)
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter(`un nouvel utilisateur est arrivé `)
        .setTimestamp()

    member.client.channels.cache.find(ch => ch.id === "782614210730393630").send( welcomeEmbed )

    member.roles.add("802637682983305226");

    await Root.createUser({
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        username: member.user.tag,
    });

}
