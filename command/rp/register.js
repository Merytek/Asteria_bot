const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = async (Root, message, args) => {

    const settings = await Root.getCharacter(message.member);

    let Name = args[0];
    let alias = args[1];
    let pos = args[2];

    async function characterCreation() {
        await Root.createCharacter({
            guildID: message.member.guild.id,
            guildName: message.member.guild.name,
            userID: message.author.id,
            username: message.author.tag,
            name: Name,
            alias: alias,
            start: pos,
            timestamp: moment().format("LLLL")
        });


        const CharEmbed = new MessageEmbed()

            .setColor("#AE55AF")
            .setTitle("Ton personnnage a été créé avec succès")
            .setDescription(`ton personnage: "${Name}" a été enregistré`)
            .setFooter("un nouveau personnage a été enregistré")
            .setTimestamp()

        message.channel.send(CharEmbed)
    }

    if (Name) {
        if (pos == "start") {
            pos = true;
        } else {
            if (pos == "end") {
                pos = false;
            }
        }
        if (alias === "$" || alias === ".") {
            message.channel.send("Alors non tu ne vas pas mettre cet alias il est résrvé >:O")
        } else {
            if (settings) {
                if (settings.name != Name || alias != settings.alias) {
                    characterCreation();
                } else message.channel.send("tu as déjà un personnage possédant ce nom ou cet alias");
            } else characterCreation();
        }

    } else message.channel.send("Il faut que tu renseignes un nom de personnage")


}


module.exports.help = {
    name: 'register',
    alias: ["reg"],
    categorie: "rp",
    description: "permet de register son personnage dans la DB du serveur",
    usage: "$register <name> [alias]",
    permission: null
}