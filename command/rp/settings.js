module.exports.run = async (Root, message, args) => {

    const settings = await Root.getCharacter(message.member);

    let param = args[0];
    let selectedCharacter = args[1]
    let newName = args[2];
    let newBrackets = message.content.slice(message.content.indexOf(args[2], message.content.indexOf('settings' || 'set') + args[0].length + 1)).trim().split('text');
    let editPoss = ["bracket", "name"];
    if (settings) {
        if (editPoss.includes(param)) {
            if (param == "bracket") {
                if (selectedCharacter == settings.name) {
                    if (newBrackets.toString() != "$" || newBrackets.toString() != ".") {
                        await Root.updateBracket(message.member, newBrackets);
                        message.channel.send(`Le bracket de ${settings.name} a été modifié en : \`${newBrackets}\``)
                    } else message.channel.send("alors...non ces Prefix sont réservé aux bots")
                } else message.channel.send("Le nom choisis ne correspond à aucun de tes personnages :/")
            } else {
                if (param == "name") {
                    if (selectedCharacter == settings.name) {
                        if (newName != settings.name) {
                            await Root.updateName(message.member, newName);
                            message.channel.send(`Le nom de ${selectedCharacter} a été changé en : ${newName}`)
                        } else message.channel.send("tu as déjà enregistré un personnage avec ce nom");
                    } else message.channel.send("Le nom choisis ne correspond à aucun de tes personnages :/");
                }
            }

        } else message.channel.send("Je ne sais pas ce que tu essayes de paramétrer mais ça n'a rien à voir")
    } else message.channel.send("Tu n'as pas de personnage enregistré utilise la commande: `$register` pour en enregistrer un");
}

module.exports.help = {
    name: "settings",
    alias: ["set"],
    categorie: "rp",
    description: "permet de modifier les informations de votre personnage",
    usage: "$settings <\"bracket\" | \"name\"> <character_name> <character_bracket | character_name>",
    permission: null
}