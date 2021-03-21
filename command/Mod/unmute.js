const { error } = require("console");
module.exports.run = (Root, message, args) => {
    if (message.member.hasPermission("MANAGE_MEMBER", true)) {
        const Mention = message.mentions.members.first();
        const isMuted = message.member.roles.cache.find(r => r.id = "781160921070043156");
        const role = message.guild.roles.cache.find(r => r.id = "781160921070043156");
        if (Mention && isMuted) {
            message.channel.send(`${Mention.user.username} a été unmute par ${message.author.username}`)
            .catch(error);
            Mention.roles.remove(role);
        } else {
            if (Mention || isMuted) {
                message.reply(`je ne peux pas unmute la personne voulue, veuillez vérifier si elle est mute ou si vous avez mentionné quelqu'un`)
                .catch(error);
            }
        }
    } else {
        if (message.member.hasPermission("MANAGE_MEMBER", false)) {
            message.reply("apprends à avoir les perms avant de venir mute")
            .catch(error);
        }
    }
}

module.exports.help = {
    name: 'unmute',
    alias: null,
    categorie: "mod",
    description: 'permet aux modérateurs de vous unmute',
    usage: "$unmute",
    permission: "MANAGE_MEMBER" && "MANAGE_ROLE"
};
