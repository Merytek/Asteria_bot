const { MessageEmbed, MessageAttachment } = require('discord.js');
const { createCanvas, loadImage } = require("canvas");
module.exports.run = async (Root, message, args) => {

    const canvas = createCanvas(500, 200);
    const ctx = canvas.getContext('2d');

    let Member = message.mentions.members.first();

    if (!Member) {

        let dbUser = await Root.getUser(message.member);
        const percent = Math.floor((dbUser.experience / dbUser.requis) * 100);

        const background = await loadImage('https://cdn.discordapp.com/attachments/752926441565323265/855442737787699210/unknown.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        for (let i = 0; i < percent; i++) {
            ctx.beginPath()
            ctx.lineWidth = 14
            ctx.strokeStyle = 0x002F7FFF
            ctx.fillStyle = 0xa4506ceb
            ctx.arc(203 + (i * 4.32), 190, 8, 0, Math.PI * 2, true)
            ctx.stroke()
            ctx.fill()
        }

        const UserRank = new MessageEmbed()

            .setColor(`#12A45F`)
            .setTitle(`Voici ton niveau ${message.author.username}`)

        message.channel.send(UserRank).then(m => {
            const EditUserRank = new MessageEmbed()

                .setColor(`#12A45F`)
                .setTitle(`Voici ton niveau ${message.author.username}`)
                .attachFiles(canvas.toBuffer('image/jpeg', { quality: 1 }))
            m.edit(EditUserRank);
        });
    } else {

        let dbUser = await Root.getUser(Member.user);

        const UserRank = new MessageEmbed()

            .setColor(`#12A45F`)
            .setTitle(`Voici le niveau de ${Member.user.username}`)
            .setDescription(`${Member.user.username} est au niveau ${dbUser.level}\n${dbUser.experience}/${dbUser.requis}`)

        message.channel.send(UserRank);
    }

}

module.exports.help = {
    name: "rank",
    alias: null,
    categorie: "xp",
    description: "Permet de voir le nombre d'Xp d'un utilisateur",
    permission: null
}