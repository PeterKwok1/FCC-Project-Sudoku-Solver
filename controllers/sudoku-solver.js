// ChatGPT

function solveSudoku(board) {
  if (solve(board)) {
    return board;
  } else {
    return "No solution exists";
  }
}

function solve(board) {
  const emptySpot = findEmptySpot(board);
  if (!emptySpot) {
    return true; // Puzzle solved
  }
  const [row, col] = emptySpot;

  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;

      if (solve(board)) {
        return true;
      }

      board[row][col] = 0; // Backtrack
    }
  }
  return false; // Trigger backtracking
}

function findEmptySpot(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
}

function isValid(board, row, col, num) {
  // Check row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }

  // Check 3x3 square
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }

  return true;
}

// Example Sudoku board
const sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log("Sudoku board:");
console.log(printBoard(sudokuBoard));
console.log("Solved Sudoku:");
console.log(printBoard(solveSudoku(sudokuBoard)));

function printBoard(board) {
  let result = "";
  for (let i = 0; i < 9; i++) {
    if (i > 0 && i % 3 === 0) {
      result += "- - - - - - - - - - -\n";
    }
    for (let j = 0; j < 9; j++) {
      if (j > 0 && j % 3 === 0) {
        result += "| ";
      }
      result += board[i][j] + " ";
    }
    result += "\n";
  }
  return result;
}

// 
class SudokuSolver {

  validate(puzzleString) {
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {

  }
}

module.exports = SudokuSolver;

