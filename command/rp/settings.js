module.exports.run = async (Root, message, args) => {

    let param = args[0];
    let selectedCharacter = args[1];
    let newName = args[2];
    let newBrackets = message.content.slice(message.content.indexOf(args[2], message.content.indexOf('settings' || 'set') + args[0].length + 1)).trim().split('text');
    let editPoss = ["bracket", "name"];
    const settings = await Root.getCharacterByName(message.member, selectedCharacter);
    const account = await Root.getCharacter(message.member);

    if (account) {
        if (param) {
            if (editPoss.includes(param)) {
                if (param == "bracket") {
                    return;
                } else {
                    if (param == "name") {
                        if (settings.name) {
                            if (settings.name != newName) {
                                Root.updateName(message.member, selectedCharacter, newName);
                                message.channel.send(`Le nom de ${settings.name} a été changé en ${newName}`);
                            }
                        } else message.channel.send("Le nom du personnage doit être différent du nom actuel")
                    } 
                }
            } else {
                message.channel.send("Il faut renseigner un paramètre soit `bracket` soit `name` pour que la commande fonctionne");
            }
        } else {
            message.channel.send("Il faut renseigner un paramètre soit `bracket` soit `name` pour que la commande fonctionne");
        }
    } else {
        message.channel.send(`désolé mais tu n'as créé aucun personnage pour en créer un utilise la commande :\̀ $register\``);
    }
}

module.exports.help = {
    name: "settings",
    alias: ["set"],
    categorie: "rp",
    description: "permet de modifier les informations de votre personnage",
    usage: "$settings <\"bracket\" | \"name\"> <character_name> <character_bracket | character_name>",
    permission: null
}
