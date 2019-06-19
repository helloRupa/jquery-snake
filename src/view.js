const Board = require('./board');

class View {
  constructor($el) {
    this.$display = $el;
    this.board = new Board();
    this.setupBoard();
  }

  setupBoard() {
    this.board.board.forEach((row) => {
      let $ul = $('<ul></ul>');

      row.forEach((space) => {
        if (space === 'S') {
          $ul.append('<li class="snake"></li>');
        } else if (space === 'A') {
          $ul.append('<li class="apple"></li>');
        } else {
          $ul.append('<li></li>');
        }
      });

      this.$display.append($ul);
    });

    // this.board.board.forEach((el) => {
    //   $ul.append($('<li></li>'));
    // });

    // this.board.board.forEach((el) => {
    //   this.$display.append($ul.clone());
    // });
  }
}

module.exports = View;
