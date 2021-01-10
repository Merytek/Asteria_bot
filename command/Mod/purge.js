const { error } = require("console");
module.exports.run = (Root, message, args) => {
    message.delete()
    if (message.member.hasPermission('MANAGE_MESSAGE', true)) {
        const deleteCount = parseInt(args[0]);

        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("il faut que le nombre soit compris entre 2 et 100 pour supprimer les messages")
            .catch(error);
            message.channel.bulkDelete(deleteCount)
    } else {
        if (message.member.hasPermission('MANAGE_MESSAGE', false)) {
            message.reply("ptdr t ki ? ").catch(error);
        }
    }
}

module.exports.help = {
    name: 'purge',
    alias: null,
    description: 'permet aux modo de supprimer les messages dans les channels pour garder un serveur propre',
    usage: "$purge <int>",
    permission: "MANAGE_MESSAGE"
};