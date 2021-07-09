const { MessageEmbed } = require("discord.js");

module.exports.run = async (Root, message, args) => {
    const account = await Root.getCharacter(message.member);
    const settings = await Root.getCharacters(message.member);

    if (account) {

        const ListEmbed = new MessageEmbed()

            .setColor("#65AB0F")
            .setTitle(`Voici la liste de tous tes personnages ${message.author.username}`)
        settings.forEach(option => {
            ListEmbed.addField(`info du personnage: ${option.name}`, `bracket: ${option.bracket}`);
        });

        message.channel.send(ListEmbed);
    } else {
        const ListEmbed = new MessageEmbed()

            .setColor("#EE65F1")
            .setTitle(`Voici la liste de tous tes personnage ${message.author.username}`)
            .setDescription("**:D**")
            .setImage("https://media1.tenor.com/images/aab58fa2951329f5c59277f02844937f/tenor.gif")

        message.channel.send(ListEmbed);
    }
}

module.exports.help = {
    name: "liste",
    alias: ["l"],
    categorie: "rp",
    description: "Permet de voir la liste des personnage que vous avez créé",
    permission: null
}