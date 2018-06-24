class Constants {
  constructor() {

    this.EMBED_COLORS = {
      ERROR: 0xFF0000,
      DEFAULTS: [
        0xFF269A,
        0xFFBE11,
        0xFF1C8E,
        0xFF69B4,
        0xFF83FA,
        0xFCB829,
        0xF226FF,
        0xA8ED00,
        0xA024ED,
        0x9370DB,
        0x68FF22,
        0x2954FF,
        0x08F8FF,
        0x00FF00,
        0x00E8FF,
        0x00F5FF,
        0x00F57F
      ]
    };

    this.REGEXES = {
      CAPITALIZE: /\w\S*/g,
    };

    this.MAX_STATUS_LENGTH = 128;
  }
}

module.exports = new Constants();