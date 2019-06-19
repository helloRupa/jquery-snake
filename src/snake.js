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
  }

  setDir(dir) {
    const dirStr = this.dir.join('');

    switch(dir) {
      case 'up':
      case 'down':
        if ([dirs.right.join(''), dirs.left.join('')].includes(dirStr)) {
          this.dir = dirs[dir];
        }

        break;
      case 'right':
      case 'left':
        if ([dirs.up.join(''), dirs.down.join('')].includes(dirStr)) {
          this.dir = dirs[dir];
        }
  
        break;
    }
  }

  grow() {
    
  }
}

module.exports = Snake;
