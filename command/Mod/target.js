module.exports.run = async (Root, message, args) => {
    if (!message.member.hasPermission("MANAGE_MEMBER", true)) {
        message.reply("Non.");
    } else {
        let Member = message.mentions.members.first();
        let characterName = args[1];

        if (Member && !characterName) {
            const account = await Root.getCharacter(Member.user);
            if (account) {
                const allChar = await Root.getCharacters(Member.user);
                message.channel.send(allChar, { code: "js" });
            } else message.channel.send("L'utilisateur mentionné n'a enregistré aucun personnage");
        } else {
            if (Member && characterName == args[1]) {
                const account = await Root.getCharacter(Member.user);
                if (account) {
                    const settings = await Root.getCharacterByName(Member.user, characterName);
                    message.channel.send(settings, { code: "js" })
                } else message.channel.send("Cette personne n'a enregistré aucun personnage sous ce nom")
            } else {
                if (!Member) {
                    characterName = args[0];
                    if (characterName) {
                        const guildChar = await Root.getAllCharactersByName(characterName);
                        if (guildChar[0]) {
                            guildChar.forEach(gc => {
                                message.channel.send(gc, { code: "js" })
                            });
                        } else message.channel.send("Aucun personnage trouvé sous ce nom")
                    } else message.channel.send("Il faut préciser au minimum un nom de personnage ou d'utilisateur pour utiliser cette commande")
                }
            }
        }
    }
}

module.exports.help = {
    name: 'target',
    alias: null,
    categorie: "mod",
    description: 'Permet de savoir qui a possède quel personnage dans la base de donnée',
    usage: "$target <user> | $target <character_name> | $target <user> <character_name>",
    permission: "MANAGE_MEMBER"
}