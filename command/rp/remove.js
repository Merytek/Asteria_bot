module.exports.run = async (Root, message, args) => {
    const settings = await Root.getCharacters(message.member)
    const characterName = args[0];

    if (settings) {
        if (characterName) {
            if (characterName == settings.name) {
                await Root.removeChar(message.member, args[0]);
                message.channel.send(`votre personnage "${characterName}" a été effacé avec succès`)
            } else message.channel.send("vous ne possédez aucun personnage à ce nom :/");
        } else message.channel.send("Vous n'avez pas donné le nom de votre personnage, veuillez donner le nom de votre personnage sinon nous ne pourrons pas le supprimer");
    } else message.channel.send("Vous n'avez pas de personnage enregistré");

}

module.exports.help = {
    name: "remove",
    alias: ["rem", "del"],
    categorie: "rp",
    description: "permet de supprimer un personnage de la base de donnée",
    usage: "$remove <character_name>",
    permission: null
}