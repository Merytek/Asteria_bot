const { PREFIX } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = async (Root, message) => {
    const dbUser = await Root.getUser(message.member);

    if (message.channel.type === "dm") {
        return Root.emit("directMessage", message);
    }

    if (message.author.bot) return;

    if (!dbUser && !message.author.bot) {
        await Root.createUser({
            guildID: message.member.guild.id,
            guildName: message.member.guild.name,
            userID: message.member.id,
            username: message.member.user.tag,
        });
    }

    if (dbUser && !message.author.bot) {
        const Condition = Math.floor((Math.random() * 49) + 1);
        if (Condition < 30 && Condition > 25) {
            const max = 20
            const min = 5
            let Xpgain = Math.floor((Math.random() * max) + min);

            Root.updateXp(Root, message.member, Xpgain);

            if (dbUser.experience >= dbUser.requis) {
                
                XpRest = dbUser.experience - dbUser.requis;

                Root.updateLevel(Root, message.member, XpRest);

                const RankUpdate = new MessageEmbed()

                    .setColor("#DAF450")
                    .setTitle(`${message.member.user.username} est passé au niveau supérieur`)
                    .setDescription(`bravo tu es passé au niveau ${dbUser.level + 1}`)
                    .setThumbnail(message.member.user.displayAvatarURL())
                    .setFooter("un utilisateur est passé au niveau supérieur ")
                    .setTimestamp()
                await Root.channels.cache.get("781624931787472977").send({ embed: RankUpdate })

            }

        }
    }


    if (message.content.startsWith(PREFIX) && !message.author.bot) {
        const args = message.content.slice(PREFIX.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (!Root.commands.has(command)) return;
        Root.commands.get(command).run(Root, message, args, dbUser);
    }
}

