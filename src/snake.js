const dirs = ['N', 'S', 'W', 'E'];

class Snake {
  constructor(dir) {
    this.dir = dir;
    this.size = 1;
  }

  static randomDirection() {
    const choice = Math.floor(Math.random() * dirs.length);
    return dirs[choice];
  }
}

module.exports = Snake;
