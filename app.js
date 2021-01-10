'use strict';
const { Client, Collection } = require("discord.js");
const { TOKEN } = require("./config.json");
const { readdirSync } = require("fs");
const { error } = require("console");

const Root = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
require("./function")(Root);
Root.mongoose = require("./mongoose.js");
Root.commands = new Collection();

const loadCommands = (dir = "./command/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            Root.commands.set(getFileName.help.name, getFileName);
            Root.commands.set(getFileName.help.alias, getFileName);
            console.log("commande chargés: ", getFileName.help.name);
            console.log("alias chargés: ", getFileName.help.alias);
        };
    });
};

const loadEvent = (dir = "./event/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const event of events) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            Root.on(evtName, evt.bind(null, Root));
            console.log("Event chargé: ", evtName); 
        };
    });
};

loadCommands();
loadEvent();
Root.mongoose.init();


Root.login(TOKEN).catch(error);