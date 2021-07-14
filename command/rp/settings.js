module.exports.run = async (Root, message, args) => {

    let param = args[0];
    let selectedCharacter = args[1];
    let updateValue = args[2];
    const settings = await Root.getCharacterByName(message.member, selectedCharacter);
    const account = await Root.getCharacter(message.member);

    if (account) {

        if (selectedCharacter) {
            if (param && param == "name") {
                if (settings.name) {
                    if (settings.name != updateValue) {
                        Root.updateName(message.member, selectedCharacter, updateValue);
                        message.channel.send(`Le nom de ${settings.name} a été changé en ${updateValue}`);
                    } else message.channel.send("Le nouveau nom doit être différent de l'ancien")
                } else message.channel.send("Tu n'as pas de personnage enregistré sous ce nom");
            } else {
                if (param == "alias") {
                    if (settings.name) {
                        if (settings.alias != updateValue && updateValue != "$" || updateValue != ".") {
                            Root.updateAlias(message.member, selectedCharacter, updateValue);
                            message.channel.send(`L'alias de ${settings.name} a été changé en ${updateValue}`);
                        } else message.channel.send("Le nouvel alias doit être différent de l'ancien et ne dois pas être un alias illégal");
                    } else message.channel.send("Tu n'as pas de personnage enregistré sous ce nom");
                } else message.channel.send("Enttre un argument pour que cette commande fonctionne il faut utiliser l'argument : `name` ou `alias`")
            }
        } else message.channel.send("Il faut que tu entres le nom d'un de tes personnage");
    } else message.channel.send("Vous n'avez pas de personnage enregistré :/");
}

module.exports.help = {
    name: "settings",
    alias: ["set"],
    categorie: "rp",
    description: "permet de modifier les informations de votre personnage",
    usage: "$settings <\"alias\" | \"name\"> <character_name> <character_alias | character_name>",
    permission: null
}
