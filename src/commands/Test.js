const CommandBase = require('lava.js').Command;
const Text = require('../extensions/Text.js');

class Test extends CommandBase {
    constructor() {
        super({
            name: "test",
            description: "A simple test command to see if the bot is online."
        })
    };

    async test(msg) {
        const text = new Text(msg, this._name);

        return text.reply('Woah, I\'m alive...', { title: 'Am I alive?' });
    }
};

module.exports = Test;