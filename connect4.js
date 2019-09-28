//create class obj to build grid
class Connect4 {
  constructor(selector) {
    this.ROWS = 6;
    this.COLS = 7;
    this.selector = selector;
    this.createGrid();
    this.setupEventListeners();
  }

  //use method to build up grid divs
  createGrid() {
    const $board = $(this.selector);
    //loop through rows, if less then ROWS, add row.
    for (let row = 0; row < this.ROWS; row++) {
      //for each row, create new div
      const $row = $('<div>')
        .addClass('row');
      //create for loop for columns within the rows
      for (let col = 0; col < this.COLS; col++) {
        const $col = $('<div>')
          .addClass('col empty') //give class empty for styling purposes
          .attr('data-col', col)
          .attr('data-row', row);
        $row.append($col);
      }
      $board.append($row);
    }
  }

  setupEventListeners() {
    const $board = $(this.selector);

    function findLastEmptyCell(col) {
      const cells = $(`.col[data-col='${col}']`);
      for (let i = cells.length - 1; i >= 0; i--) {
        const $cell = $(cells[i]);
        if ($cell.hasClass('empty')) {
          return $cell;
        }
      }
      return null;
    }

    $board.on('mouseenter', '.col.empty', function() {
      const col = $(this).data('col');
      const $lastEmptyCell = findLastEmptyCell(col);
      $lastEmptyCell.addClass(`next-red`);
      console.log(col);
    })

    $board.on('mouseleave', '.col', function() {
      $('.col').removeClass(`next-red`);
    })
  }
}