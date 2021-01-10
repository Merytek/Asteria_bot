const { error } = require("console");
module.exports.run = (Root, message, args) => {
    const Message = args.join(" ");
    message.delete().catch(error)
    message.channel.send(Message).catch(error)
}

module.exports.help = {
    name: 'talk',
    description: 'fait dire au bot la phrase que tu as choisi',
};