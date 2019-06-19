const Snake = require('./snake');
const pixels = 20;

class Board {
  constructor() {
    this.board = Array(pixels).fill(null).map(row => Array(pixels).fill(null));
    this.snake = new Snake(Board.snakeLocation());
    this.setupBoard();
  }

  setupBoard() {
    let appleLoc = Board.randomLocation();

    while (appleLoc.join('') === this.snake.head.join('')) {
      appleLoc = Board.randomLocation();
    }

    this.placeSnake(this.snake.head);
    this.placeApple(appleLoc);
  }

  placeSnake(pos) {
    const [y, x] = pos;

    this.board[y][x] = 'S';
  }

  placeApple(pos) {
    const [y, x] = pos;

    this.board[y][x] = 'A';
  }

  // Never start game with snake on edge
  static snakeLocation() {
    let [y, x] = this.randomLocation();
    const limits = [0, pixels - 1];

    while (limits.includes(y) || limits.includes(x)) {
      [y, x] = this.randomLocation();
    }

    return [y, x];
  }

  static randomLocation() {
    return [this.randomVal(), this.randomVal()];
  }

  static randomVal() {
    return Math.floor(Math.random() * pixels);
  }
}

module.exports = Board;
