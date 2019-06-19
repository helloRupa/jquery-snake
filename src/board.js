// const Snake = require('./snake');
const pixels = 20;

class Board {
  constructor() {
    this.board = Array(pixels).fill(null).map(row => Array(pixels).fill(null));
    // this.snake = new Snake(Snake.randomDirection());
    this.setupBoard();
  }

  setupBoard() {
    const snakeLoc = Board.randomLocation();
    let appleLoc = Board.randomLocation();

    while (appleLoc.join('') === snakeLoc.join('')) {
      appleLoc = Board.randomLocation();
    }

    this.placeSnake(snakeLoc);
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

  static randomLocation() {
    return [this.randomVal(), this.randomVal()];
  }

  static randomVal() {
    return Math.floor(Math.random() * pixels);
  }
}

module.exports = Board;
