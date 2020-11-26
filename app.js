'use strict';
const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config.json");
const { readdirSync } = require("fs");

const Root = new Client();
Root.mongoose = require("./mongoose.js");
Root.commands = new Collection();

const loadCommands = (dir = "./command/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            Root.commands.set(getFileName.help.name, getFileName);
            console.log("commande chargé: ", getFileName.help.name);
        };
    });
};

loadCommands();
Root.mongoose.init();

Root.on("message", message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!Root.commands.has(command)) return;
    Root.commands.get(command).run(Root, message, args);

});

Root.on("ready", () => console.log(`connecté en tant que: ${Root.user.tag}`));
Root.login(TOKEN)