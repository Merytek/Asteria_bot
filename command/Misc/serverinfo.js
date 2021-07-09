module.exports.run = async (Root, message, args) => {
    message.channel.send(message.guild.memberCount)
}

module.exports.help = {
    name: 'serverinfo',
    alias: ["server", "srv"],
    categorie: "misc",
    description: 'Permet de voir les stats du serveur',
    usage: "$serverinfo",
    permission: null
};