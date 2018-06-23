const Lava = require('lava.js');
const fs = require('fs');
const configJson = require('../config/config.json');
const Logger = Lava.Logger;

const Client = new Lava(configJson.token, { defaultCommands: configJson.defaultCommands, prefixes: configJson.prefixes, owners: configJson.ownerIds });

fs.readdir(__dirname + '/commands/', (err, files) => {
    if (err) return Logger.error(err);
    files.forEach(file => {
        const commandFile = require(`./commands/${file}`);
        Client.addCommand(commandFile).then(() => { Logger.log(`Loaded user command ${file}`) }).catch(err => { Logger.error(err) });
    })
});

fs.readdir(__dirname + '/events/', (err, files) => {
    if (err) return Logger.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split('.')[0];
        Logger.log(`Loaded user event ${file}`);
        Client.on(eventName, (...args) => eventFunction.run(Client, ...args));
    });
});

Client.connect();