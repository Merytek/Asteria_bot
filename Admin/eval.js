module.exports.run = async (Root, message, args) => {
    function clean (text) {
        if (typeof text === "string") {
            return text.replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
        }
        return text;
    }
    if (message.author.id != "422848361062858752") return
    const code = args.join(" ");
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    message.channel.send(cleanCode, { code: 'js' });
}

module.exports.help = {
    name: 'eval',
    description: 'permet d\'exécuter du JS sur le serveur',
};