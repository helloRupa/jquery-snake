const Board = require('./board');

class View {
  constructor($el) {
    this.$display = $el;
    this.board = new Board();
    this.render();
    this.render();
  }

  render() {
    this.$display.html('');

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
  }
}

module.exports = View;
