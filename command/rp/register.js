const { MessageEmbed } = require("discord.js");

module.exports.run = async (Root, message, args) => {

    const settings = await Root.getCharacter(message.member);

    let Brackets = message.content.slice(message.content.indexOf(args[1], message.content.indexOf('register' || 'reg') + args[0].length + 1)).trim().split('text');
    let Name = args[0];

    async function characterCreation() {
        await Root.createCharacter({
            guildID: message.member.guild.id,
            guildName: message.member.guild.name,
            userID: message.author.id,
            username: message.author.tag,
            name: Name,
            bracket: Brackets
        });


        const CharEmbed = new MessageEmbed()

            .setColor("#AE55AF")
            .setTitle("Ton personnnage a été créé avec succès")
            .setDescription(`ton personnage: "${Name}" a été enregistré avec le bracket: "${Brackets}"`)
            .setFooter("un nouveau personnage a été enregistré")
            .setTimestamp()

        message.channel.send(CharEmbed)
    }

    if (settings) {
        if (Brackets.toString() == settings.bracket.toString()) {
            message.channel.send("tu as déjà un personnage enregistré avec ce Bracket")
        } else {
            if (Brackets.toString() != "$" || Brackets.toString() != ".") {
                if (settings.name != Name) {
                    characterCreation();
                } else message.channel.send("tu as déjà un personnage possédant ce nom là");

            } else message.channel.send("Alors oui mais non si vous mettez mon prefix ou celui de mon pote comme bracket on va exploser")
        }
    } else {
        if (Brackets.toString() != "$" || Brackets.toString() != ".") {
            characterCreation()
        } else message.channel.send("Alors oui mais non si vous mettez mon prefix ou celui de mon pote comme bracket on va exploser");
    }
}





module.exports.help = {
    name: 'register',
    alias: ["reg"],
    categorie: "rp",
    description: "permet de register son personnage dans la DB du serveur",
    usage: "$register <name> <bracket::text>",
    permission: null
}