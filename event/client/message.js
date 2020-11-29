const { PREFIX } = require("../../config.json");

module.exports = (Root, message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!Root.commands.has(command)) return;
    Root.commands.get(command).run(Root, message, args);
}