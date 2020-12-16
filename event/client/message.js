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
                
                if (dbUser.level = 5 && message.member.roles.cache.find(r => r.id = "747459650282323995")) {
                    message.member.roles.remove("747459650282323995");
                    message.member.roles.add("747459650286387230");
                }

                if (dbUser.level = 10 && message.member.roles.cache.find(r => r.id = "747459650286387230")) {
                    message.member.roles.remove("747459650286387230");
                    message.member.roles.add("747459650282323996");
                }

                if (dbUser.level = 15 && message.member.roles.cache.find(r => r.id = "747459650282323996")) {
                    message.member.roles.remove("747459650282323996");
                    message.member.roles.add("747459650282323997");
                }

                if (dbUser.level = 20 && message.member.roles.cache.find(r => r.id = "747459650282323997")) {
                    message.member.roles.remove("747459650282323997");
                    message.member.roles.add("747459650286387231");
                }

                if (dbUser.level = 25 && message.member.roles.cache.find(r => r.id = "747459650286387231")) {
                    message.member.roles.remove("747459650286387231");
                    message.member.roles.add("747459650286387232");
                }

                if (dbUser.level = 30 && message.member.roles.cache.find(r => r.id = "747459650286387232")) {
                    message.member.roles.remove("747459650286387232");
                    message.member.roles.add("747459650286387234");
                }

                if (dbUser.level = 35 && message.member.roles.cache.find(r => r.id = "747459650286387234")) {
                    message.member.roles.remove("747459650286387234");
                    message.member.roles.add("747459650286387233");
                }

                if (dbUser.level = 40 && message.member.roles.cache.find(r => r.id = "747459650286387233")) {
                    message.member.roles.remove("747459650286387233");
                    message.member.roles.add("747459650286387235");
                }

                if (dbUser.level = 45 && message.member.roles.cache.find(r => r.id = "747459650286387235")) {
                    message.member.roles.remove("747459650286387235");
                    message.member.roles.add("747459650286387236");
                }

                if (dbUser.level = 50 && message.member.roles.cache.find(r => r.id = "747459650286387236")) {
                    message.member.roles.remove("747459650286387236");
                    message.member.roles.add("747459650286387237");
                }

                if (dbUser.level = 55 && message.member.roles.cache.find(r => r.id = "747459650286387237")) {
                    message.member.roles.remove("747459650286387237");
                    message.member.roles.add("747459650286387238");
                }

                if (dbUser.level = 60 && message.member.roles.cache.find(r => r.id = "747459650286387238")) {
                    message.member.roles.remove("747459650286387238");
                    message.member.roles.add("747459650286387239");
                }

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

