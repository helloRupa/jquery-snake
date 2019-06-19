const Snake = require('./snake');

class Board {
  constructor($el) {
    this.$display = $el;
    this.board = Array(20).fill(Array(20).fill(null));
    this.snake = new Snake(Snake.randomDirection());
    this.setupBoard();
  }

  setupBoard() {
    let $ul = $('<ul></ul>');

    this.board.forEach((el) => {
      $ul.append($('<li></li>'));
    });

    this.board.forEach((el) => {
      this.$display.append($ul.clone());
    });
  }
}

module.exports = Board;
