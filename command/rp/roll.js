module.exports.run = (Root, message, args) => {
    let num = parseInt(args[0]);
    let modifier = args[1];

    if (num) {
        if (typeof num != "number") message.channel.send("La commande nécessite l'utilisation d'un nombre");
        else {
            if (!modifier) {
                let result = Math.floor((Math.random() * num) + 1);
                message.reply(`tu as tiré un dé à **${num} face(s)** ! \nrésultat: **${result} !**`)
            } else {
                let modifierType = modifier.split("")
                let resultEdit = parseInt(modifierType.splice(1).join(""));

                if (modifierType[0] === "+") {
                    if (typeof resultEdit == "number" && !isNaN(resultEdit)) {
                        let result = Math.floor((Math.random() * num) + 1);
                        message.reply(`tu as tiré un dé à **${num} face(s)** ! \nle résultat est censé être de **${result}** mais à cause d'un debuff de ${resultEdit} ton résultat est de ${result + resultEdit}`);
                    } else message.channel.send("Il manque un nombre pour faire fonctionne la commande");
                } else if (modifierType[0] === "-") {
                    if (typeof resultEdit == "number" && !isNaN(resultEdit)) {
                        let result = Math.floor((Math.random() * num) + 1);
                        message.reply(`tu as tiré un dé à **${num} face(s)** ! \nle résultat est censé être de **${result}** mais grâce à un buff de ${resultEdit} ton résultat est de ${result - resultEdit}`);
                    }
                }
            }

        }
    } else message.channel.send("Précise un nombre pour utiliser la commande");

}

module.exports.help = {
    name: 'roll',
    alias: null,
    categorie: "rp",
    description: 'Renvoie un nombre aléatoire dans un lancé de dés avec un nombre maximum choisi par le joueur et si besoin un alter de score',
    usage: "$roll <int> [{+|-}int]",
    permission: null
};
