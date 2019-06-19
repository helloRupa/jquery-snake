const dirs = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1]
};

class Snake {
  constructor(pos) {
    this.dir = dirs.up;
    this.head = pos;

    // head is always at 0, tail at length - 1
    this.segments = [pos];
  }

  move() {
    this.head = [this.head[0] + this.dir[0], this.head[1] + this.dir[1]];

    // is move going to be successful?
    // return this.hitWall();
  }

  // hitWall() {
  //   const limits = Board.getLimits();

  //   return limits.includes(this.head[0]) || limits.includes(this.head[1]);
  // }

  setDir(dir) {
    this.dir = dirs[dir];
  }
}

module.exports = Snake;
