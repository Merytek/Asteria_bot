module.exports.run = (Root, message, args) => {
    if (!message.member.hasPermission("MANAGE_MEMBER", true)) {
        message.reply("ptdr mais t'es trop con tu pensais le mute sans les droits")
    } else {
        if (message.member.hasPermission("MANAGE_MEMBER", true)) {
            let Mention = message.mentions.members.first();
            let reason = args.slice(1).join(" ");
            let role = message.guild.roles.cache.find(r => r.id === "781160921070043156");
            if (!Mention) {
                message.reply(`${message.author} il faut mentionner quelqu'un`)
            } else {
                if (Mention && reason) {
                    Mention.roles.add(role);
                    message.channel.send(`${message.author} a mute ${Mention.user.username} pour: **${reason}**`)
                } else {
                    if (Mention && !reason) {
                        reason = "son trop grand nombre d'infraction";
                        Mention.roles.add(role);
                        message.channel.send(`${message.author} a mute ${Mention.user.username} pour: **${reason}**`)
                    }
                }
            }

        }
    }
}

module.exports.help = {
    name: 'mute',
    description: 'permet aux modérateur de mute les éléments perturbateur !',
};