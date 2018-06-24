const String = require('./String.js');
const Random = require('./Random.js');
const Logger = require('lava.js').Logger;
const Constants = require('./Constants.js');

class Text {
  constructor(msg, commandName) {
    this.msg = msg;
    this.commandName = commandName;
    this._commandName = commandName.charAt(0).toUpperCase() + commandName.slice(1);
  }

  reply(description, options) {
    return this.send(String.boldify(this.msg.author.mention) + ', ' + description, options);
  };

  send(description, options) {
    return this.createEmbed(description, options);
  };

  sendError(description) {
    return this.send(description, { title: 'Error!', colour: 'error' });
  }

  createEmbed(description, options = {}) {
    let _title = '';
    let _colour = '';

    if (!description) {
      this.sendError('An embed requires a description to be sent!');
      return Logger.error('An embed requires a description to be sent!');
    };

    if (!options.title) { _title = null } else { _title = options.title };

    if (!options.colour) {
      _colour = Random.arrayElement(Constants.EMBED_COLORS.DEFAULTS);
    } else if (options.colour == 'error') {
      _colour = Constants.EMBED_COLORS.ERROR;
    } else {
      _colour = options.title;
    }

    return this.msg.channel.createMessage({
      embed: {
        title: _title,
        description: description,
        author: {
          name: this._commandName,
          icon_url: 'https://cdn.discordapp.com/avatars/460176090972028935/7e7c4918f9275e1196df4296c010dbf1.png'
        },
        color: _colour,
        timestamp: new Date()
      }
    });
  }
}

module.exports = Text;