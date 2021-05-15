const { MessageEmbed } = require("discord.js");

module.exports.run = async (Root, message, args) => {
    const settings = await Root.getCharacters(message.member);

    const ListEmbed = new MessageEmbed()

        .setColor("#65AB0F")
        .setTitle(`Voici la liste de tous tes personnages ${message.author.username}`)
    settings.forEach(option => {
        ListEmbed.addField(`info du personnage: ${option.name}`, `bracket: ${option.bracket}`);
    });

    message.channel.send(ListEmbed);
}

module.exports.help = {
    name: "liste",
    alias: ["l"],
    categorie: "rp",
    description: "Permet de voir la liste des personnage que vous avez créé",
    permission: null
}