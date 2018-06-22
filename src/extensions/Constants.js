class Constants {
  constructor() {

    this.EMBED_COLORS = {
      ERROR: [255, 0, 0],
      DEFAULTS: [
        [255, 38, 154],
        [255, 190, 17],
        [255, 28, 142],
        [255, 105, 180],
        [255, 131, 250],
        [252, 184, 41],
        [242, 38, 255],
        [168, 237, 0],
        [160, 36, 237],
        [147, 112, 219],
        [104, 255, 34],
        [41, 84, 255],
        [8, 248, 255],
        [0, 255, 0],
        [0, 232, 255],
        [0, 245, 255],
        [0, 255, 127]
      ]
    };

    this.REGEXES = {
      CAPITALIZE: /\w\S*/g,
    };

    this.MAX_GAME_LENGTH = 128;
  }
}

module.exports = new Constants();