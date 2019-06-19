const Board = require('./board');

class View {
  constructor($el) {
    this.$display = $el;
    this.board = new Board();
    this.render();
    this.bindKeys();
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

  bindKeys() {
    $(document).keydown((e) => {
      const charCode = e.keyCode || e.which;

      switch(charCode) {
        case 38:
        case 87:
          this.board.snake.setDir('up');
          break;
        case 40:
        case 83:
          this.board.snake.setDir('down');
          break;
        case 37:
        case 65:
          this.board.snake.setDir('left');
          break;
        case 39:
        case 68:
          this.board.snake.setDir('right');
          break;
      }

      e.preventDefault();
    });
  }
}

module.exports = View;
