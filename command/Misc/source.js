const { MessageEmbed } = require("discord.js");
const { error } = require("console");
module.exports.run = (Root, message, args) => {
    const SrcEmbed = new MessageEmbed()
        .setColor("#dc143c")
        .setTitle(`code source du bot`)
        .setURL("https://github.com/Merytek/Asteria_bot")
        .setDescription(`${message.author.username} voici pour toi le code source du bot qui est aussi accessible depuis le <#747459651393552471>\n\n\t tu peux reprendre des parties du programme par contre tu dois en citer la source tu as juste à cliquer [ici](https://github.com/Merytek/Asteria_bot) !`)

    message.channel.send(SrcEmbed)
    .catch(error);
}

module.exports.help = {
    name: 'source',
    alias: "src",
    description: 'vous envoie vers le code source de mon bot !',
    usage: "$source" || "$src",
    permission: null
};