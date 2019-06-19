// Up, Down, Left, Right
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

class Snake {
  constructor(pos) {
    this.dir = Snake.randomDirection();
    this.head = pos;
    this.size = 1;
  }

  static randomDirection() {
    const choice = Math.floor(Math.random() * dirs.length);
    return dirs[choice];
  }
}

module.exports = Snake;
