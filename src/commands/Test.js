const Lava = require('lava.js');
const CommandBase = Lava.Command;
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

        await text.reply('Woah, I\'m alive...', { title: 'Am I alive?' });
        return msg.channel.createMessage('There should be an embed above this message.');
    }
};

module.exports = Test;