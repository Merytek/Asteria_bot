'use strict';
const { Client, Collection } = require("discord.js");
const { TOKEN } = require("./config.json");
const { readdirSync } = require("fs");
const { error } = require("console");

const Root = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

require("./function")(Root);

require("./Rp/meteo/time/time")(Root);
require("./Rp/meteo/weather/weather_dragonstone")(Root);
require("./Rp/meteo/weather/weather_shadowCity")(Root);
require("./Rp/meteo/weather/weather_Kalendia")(Root);
require("./Rp/meteo/weather/weather_IMI")(Root);

Root.mongoose = require("./mongoose");
Root.commands = new Collection();

const loadCommands = (dir = "./command/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            Root.commands.set(getFileName.help.name, getFileName);
            console.log("commande chargés: ", getFileName.help.name);
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
Root.Time();
Root.DragonestoneMeteo();
Root.ShadowCityMeteo();
Root.KalendiaMeteo();
Root.IMIMeteo();

Root.login(TOKEN).catch(error);