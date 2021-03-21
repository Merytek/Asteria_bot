const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config.json");
const { readdirSync } = require("fs");
const { error } = require("console");
const categoryList = readdirSync("./command");

module.exports.run = (Root, message, args) => {
    if (!args.length) {
        const HelpEmbed = new MessageEmbed()

            .setColor("AAFD01")
            .setTitle(`Voici la liste des commandes disponible ${message.author}`)
            .setDescription(`Si tu veux avoir plus d'information sur une commande utilise la commande: \`${PREFIX}help <command_name>\``)
            .setFooter("un utilisateur a demandé de l'aide")
            .setTimestamp()

        for (const category of categoryList) {
            HelpEmbed.addField(`${category}`, `${Root.commands.filter(cat => cat.help.categorie === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`)
        }
        return message.channel.send(HelpEmbed);
    }

}

module.exports.help = {
    name: "help",
    alias: ["h"],
    categorie: "misc",
    description: 'Vous donne les commandes du bot !',
    usage: "$help [commmand_name]",
    permission: null
}