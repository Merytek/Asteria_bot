'use strict';
const { Client, Collection } = require("discord.js");
const { TOKEN } = require("./config.json");
const { readdirSync } = require("fs");

const Root = new Client();
require("./function")(Root);
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

    
Root.login(TOKEN)