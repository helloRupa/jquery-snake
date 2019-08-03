const View = require('./view');

$(() => {
  let view = new View($('#game'), $('#score'), $('#page-title'));

  $('#new-game').on('click', () => { 
    view.clearView();
    view = new View($('#game'), $('#score'), $('#page-title')); 
  });
});