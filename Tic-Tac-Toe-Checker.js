function checkWinner(board) {
  // Checking rows
  if (
    board[0][0] == board[1][0] &&
    board[1][0] == board[2][0] &&
    board[0][0] != 0
  ) {
    return board[0][0];
  }
  if (
    board[0][1] == board[1][1] &&
    board[1][1] == board[2][1] &&
    board[0][1] != 0
  ) {
    return board[0][1];
  }
  if (
    board[0][2] == board[1][2] &&
    board[1][2] == board[2][2] &&
    board[0][2] != 0
  ) {
    return board[0][0];
  }

  // Checking Columns
  if (
    board[0][0] == board[0][1] &&
    board[0][1] == board[0][2] &&
    board[0][0] != 0
  ) {
    return board[0][0];
  }
  if (
    board[1][0] == board[1][1] &&
    board[1][1] == board[1][2] &&
    board[1][0] != 0
  ) {
    return board[1][1];
  }
  if (
    board[2][0] == board[2][1] &&
    board[2][1] == board[2][2] &&
    board[2][0] != 0
  ) {
    return board[2][0];
  }

  // Check Diagonals
  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[0][0] != 0
  ) {
    return board[0][0];
  }
  if (
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[0][2] != 0
  ) {
    return board[0][2];
  }

  let boardString = '';
  boardString = boardString.concat(
    board[0].join(''),
    board[1].join(''),
    board[2].join('')
  );
  return boardString.indexOf('0') == -1 ? 0 : -1;
}

let boardTest = [
  [1, 2, 1],
  [1, 2, 2],
  [1, 0, 1],
];

console.log('Test Winner X: ', checkWinner(boardTest));

let boardTest1 = [
  [1, 2, 1],
  [2, 2, 2],
  [1, 0, 1],
];

console.log('Test Winner O: ', checkWinner(boardTest1));

let boardTest2 = [
  [1, 2, 2],
  [2, 1, 1],
  [1, 2, 2],
];

console.log('Test Draw: ', checkWinner(boardTest2));

let boardTest3 = [
  [0, 0, 1],
  [0, 0, 2],
  [0, 0, 1],
];

console.log('Test Incomplete Game: ', checkWinner(boardTest3));
