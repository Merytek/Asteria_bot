module.exports.run = async (Root, message, args) => {

    let param = args[0];
    let selectedCharacter = args[1];
    let newName = args[2];
    const settings = await Root.getCharacterByName(message.member, selectedCharacter);
    const account = await Root.getCharacter(message.member);

    if (account) {
        if (param && param == "name") {
            if (settings.name) {
                if (settings.name != newName) {
                    Root.updateName(message.member, selectedCharacter, newName);
                    message.channel.send(`Le nom de ${settings.name} a été changé en ${newName}`);
                }
            } else message.channel.send("Le nom du personnage doit être différent du nom actuel")

        } else message.channel.send("Il faut renseigner le paramètre `name` pour que la commande fonctionne");
    } else message.channel.send("Vous n'avez pas de personnage enregistré :/")
}

module.exports.help = {
    name: "settings",
    alias: ["set"],
    categorie: "rp",
    description: "permet de modifier les informations de votre personnage",
    usage: "$settings <\"bracket\" | \"name\"> <character_name> <character_bracket | character_name>",
    permission: null
}
