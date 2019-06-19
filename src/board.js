const Snake = require('./snake');
const pixels = 20;
const limits = [0, pixels - 1];

class Board {
  constructor() {
    this.board = this.emptyBoard();
    this.snake = new Snake(Board.snakeLocation());
    this.apple = Board.randomLocation();
    this.setupBoard();
  }

  emptyBoard() {
    return Array(pixels).fill(null).map(row => Array(pixels).fill(null));
  }

  setupBoard() {
    while (this.apple.join('') === this.snake.head.join('')) {
      this.apple = Board.randomLocation();
    }

    this.placeSnake(this.snake.head);
    this.placeApple(this.apple);
  }

  updateBoard() {
    this.board = this.emptyBoard();
    this.snake.move();

    if (!this.gameOver()) {
      this.placeSnake(this.snake.head);
      this.placeApple(this.apple);
    }
  }

  placeSnake(pos) {
    const [y, x] = pos;

    this.board[y][x] = 'S';
  }

  placeApple(pos) {
    const [y, x] = pos;

    this.board[y][x] = 'A';
  }

  gameOver() {
    const [y, x] = this.snake.head;

    return y < 0 || x < 0 || x >= pixels || y >= pixels;
  }

  // Never start game with snake on edge cuz kindness
  static snakeLocation() {
    let [y, x] = this.randomLocation();

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
