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


Client.on('ready', () => {
    Logger.log('The bot has connected and is online!');
    Client.editStatus('dnd', { name: 'v' + require('../package.json').version + ' | p;help', type: 3 });
});

Client.connect();