const String = require('./String.js');
const Random = require('./Random.js');
const Logger = require('lava.js').Logger;
const Constants = require('./Constants.js');

class Text {
  constructor(msg, commandName) {
    this.msg = msg;
    this.commandName = commandName;
  }

  reply(description, options) {
    return this.send(String.boldify(this.msg.author.mention) + ', ' + description, options);
  }

  send(description, options) {
    return this.createEmbed(this.msg.channel, description, options);
  }

  createEmbed(channel, description, options = {}) {
    let embed = {
      color: Math.floor(Math.random() * 16777215),// Random.arrayElement(Constants.EMBED_COLORS.DEFAULTS),
      //title: options.title,
      timestamp: new Date
    }

    let fields = []
    fields.push({
      name: options.title,
      value: description
    })

    embed.fields = fields;

    return this.msg.channel.createMessage({ embed });
  }
}

module.exports = Text;