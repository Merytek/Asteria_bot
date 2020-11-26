module.exports.run = (Root, message, args) => {
    function clean(text) {
        if (typeof text === "string") {
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            return text
        }

        if (message.author.id !== "422848361062858752") return;
        const evaled = eval(code);
        const cleancode = clean(evaled);
        message.channel.send(cleancode, { code: "js" });

    }

    const code = args.join(" ");
    clean(code)
}

module.exports.help = {
    name: 'eval',
    description: 'renvoie un code JS testé',
};