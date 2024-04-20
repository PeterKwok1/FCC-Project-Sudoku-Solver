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

function parseSudokuString(sudokuString) {
  const sudokuBoard = [];
  let row = [];
  for (let i = 0; i < sudokuString.length; i++) {
    const char = sudokuString[i];
    if (char === '.') {
      row.push(0); // Represent empty spots with 0
    } else if (!isNaN(parseInt(char))) {
      row.push(parseInt(char));
    }
    // If the row is filled or we reach the end of the string
    if (row.length === 9 || i === sudokuString.length - 1) {
      sudokuBoard.push(row);
      row = [];
    }
  }
  return sudokuBoard;
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
    const board = parseSudokuString(puzzleString)
    const solvedBoard = solveSudoku(board)
    return solvedBoard.flat().join('')
  }
}

module.exports = SudokuSolver;

