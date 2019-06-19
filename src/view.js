const Board = require('./board');

class View {
  constructor($el) {
    this.$display = $el;
    this.board = new Board();
    this.bindKeys();
    this.render();
    this.clock = setInterval(() => {
      this.animate();
    }, 1000);
  }

  animate() {
    if (!this.board.gameOver()) {
      this.render();
      this.board.updateBoard();
    } else {
      clearInterval(this.clock);
      alert('Goodbye snake :(');
    }
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

  handleKey(e, dir) {
    this.board.snake.setDir(dir);
    e.preventDefault();
  }

  bindKeys() {
    $(document).keydown((e) => {
      const charCode = e.keyCode || e.which;

      switch(charCode) {
        case 38:
        case 87:
          this.handleKey(e, 'up');
          break;
        case 40:
        case 83:
          this.handleKey(e, 'down');
          break;
        case 37:
        case 65:
          this.handleKey(e, 'left');
          break;
        case 39:
        case 68:
          this.handleKey(e, 'right');
          break;
      }
    });
  }
}

module.exports = View;
