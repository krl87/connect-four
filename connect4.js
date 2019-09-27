//create class obj to build grid
class Connect4 {
  constructor(selector) {
    this.ROWS = 6;
    this.COLS = 7;
    this.selector = selector;
    this.createGrid();
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
          .addClass('col empty'); //give class empty for styling purposes
        $row.append($col);
      }
      $board.append($row);
    }
  }
}