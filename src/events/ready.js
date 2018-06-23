const Logger = require('lava.js').Logger;

exports.run = (Client) => {
  Logger.log('The bot has connected and is online!');
  Client.editStatus('dnd', { name: 'v' + require('../../package.json').version + ' | p;help', type: 3 });
}