module.exports.run = (Root, message, args) => {
    const Message = args.join(" ");
    message.delete()
    message.channel.send(Message)
}

module.exports.help = {
    name: 'talk',
    description: 'fait dire au bot la phrase que tu as choisi',
};