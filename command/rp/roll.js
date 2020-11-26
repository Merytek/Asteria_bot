module.exports.run = (Root, message, args) => {
    const number = args.join('');

    let result = Math.floor((Math.random() * number) + 1);
    let statut = number / 2;

    if (result > statut) {
        message.reply(`tu as tiré ${result} tu as gagné ✔`)
    }

    if (result <= statut) {
        message.reply(`tu as tiré ${result} tu as perdu ❌`)
    }
}


module.exports.help = {
    name: 'roll',
    description: 'Renvoie un nombre aléatoire dans un tire de dés avec un nombre maximum choisis par le joueur',
};