module.exports.run = (Root, message, args) => {
    const mention = message.mentions.users.map(user => {
        const Message = args.slice(1).join(" ");
        message.delete();
        user.send(`> *${user.username} tu viens de recevoir un message de la part de ${message.author.username} par chance le pigeon est arrivé entier*\n ${Message}`)

    });
}

module.exports.help = {
    name: 'letter',
    description: 'Envoie une lettre secrète à un membre du serveur !',
};