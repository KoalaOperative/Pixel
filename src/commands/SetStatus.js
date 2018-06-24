const CommandBase = require('lava.js').Command
const Text = require('../extensions/Text.js');
const Client = require('../index.js').Client;

class SetStatus extends CommandBase {
  constructor() {
    super({
      name: 'setstatus',
      description: "A command to change the bot's status. Bot owners only."
    })
  };

  async setstatus(msg) {
    const text = new Text(msg, this._name);
    return text.sendError('This command is in production. Please don\'t use it.');
  }
};

module.exports = SetStatus;