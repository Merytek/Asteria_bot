const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config.json");
const { readdirSync } = require("fs");
const { error } = require("console");
const categoryList = readdirSync("./command");

module.exports.run = (Root, message, args) => {
    if (!args.length) {
        const HelpEmbed = new MessageEmbed()

            .setColor("AAFD01")
            .setTitle(`Voici la liste des commandes disponible ${message.author.username}`)
            .setDescription(`Si tu veux avoir plus d'information sur une commande utilise la commande: \`${PREFIX}help <command_name>\``)
            .setFooter("un utilisateur a demandé de l'aide")
            .setTimestamp()

        for (const category of categoryList) {
            HelpEmbed.addField(`${category}`, `${Root.commands.filter(cat => cat.help.categorie === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`)
        }
        return message.channel.send(HelpEmbed);
    } else {
        const command = Root.commands.get(args[0])
       
        const commandHelpEmbed = new MessageEmbed()
        
            .setColor("#AAFD01")
            .setTitle(`voici les informations trouvé sur la commande: __${args[0]}__`)
            .setDescription("Si l'alias donné est marqué: `null` cela veut dire qu'il n'y a pas d'alias pour cette commande\nsi les arguments de commande sont `[]` l'argument n'est pas obligatoire sinon s'ils sont entre `<>` ils sont obligatoire")
            .addField("Description: ", command.help.description)
            .addField("alias: ", command.help.alias)
            .addField("utilisation: ", command.help.usage)
            .setFooter("un utilisateur a demandé de l'aide")
            .setTimestamp()

        message.channel.send(commandHelpEmbed).catch(error);
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