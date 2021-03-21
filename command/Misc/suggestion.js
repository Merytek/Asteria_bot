const { error } = require("console");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let suggestion = args.slice(0).join(" ");
    let target = message.guild.channels.cache.get("754243356938207282");
    if (suggestion) {
        if (message.channel.id === "747459651230236723") {
            message.delete()
            const suggestEmbed = new MessageEmbed()
                .setColor("#a100c5")
                .setTitle(`suggestion de ${message.author.username}`)
                .setDescription(suggestion)
                .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))

            const validation = await target.send({ embed: suggestEmbed });
            validation.react("✅").then(() => validation.react("❌"));

        } else {
            if (message.channel.id != "747459651230236723") {
                message.reply("fais la commande dans le <#747459651230236723>").catch(error);
            }
        }
    } else {
        if (!suggestion) {
            message.reply("ajoute ta suggestion si tu veux qu'elle soit prise en compte :)").catch(error);
        }
    }
}

module.exports.help = {
    name: 'suggestion',
    alias: ["suggest"],
    categorie: "misc",
    description: 'vous permet de faire une suggestion pour le serveur',
    usage: "$suggestion" || "$suggest",
    permission: null
};