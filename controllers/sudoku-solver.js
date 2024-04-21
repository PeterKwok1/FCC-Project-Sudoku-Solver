// ChatGPT

function solveSudoku(board) {
  if (solve(board)) {
    return board;
  } else {
    return false;
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
    if (!puzzleString) {
      return 'Required field missing'
    }
    if (puzzleString.length != 81) {
      return 'Expected puzzle to be 81 characters long'
    }
    if (/[^1-9.]/g.test(puzzleString)) { // not 1-9 or .
      return 'Invalid characters in puzzle'
    }
    return 'Valid'
  }

  checkRowPlacement(puzzleString, row, column, value) {
    let grid = parseSudokuString(puzzleString)
    row = this.letterToNumber(row)
    if (grid[row - 1][column - 1] !== 0) {
      return false
    }
    for (let i = 0; i < 9; i++) {
      if (grid[row - 1][i] == value) {
        return false
      }
    }
    return true
  }

  checkColPlacement(puzzleString, row, column, value) {
    let grid = parseSudokuString(puzzleString)
    row = this.letterToNumber(row)
    if (grid[row - 1][column - 1] !== 0) {
      return false
    }
    for (let i = 0; i < 9; i++) {
      if (grid[column - 1][i] == value) {
        return false
      }
    }
    return true
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    let grid = parseSudokuString(puzzleString)
    row = this.letterToNumber(row)
    let startRow = row - (row % 3),
      startCol = column - (column % 3)
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (grid[i + startRow][j + startCol] == value)
          return false
    return true
  }

  solve(puzzleString) {
    const board = parseSudokuString(puzzleString)
    const solvedBoard = solveSudoku(board)
    if (!solvedBoard) return false
    return solvedBoard.flat().join('')
  }

  letterToNumber(row) {
    switch (row.toUpperCase()) {
      case 'A':
        return 1
      case 'B':
        return 2
      case 'C':
        return 3
      case 'D':
        return 4
      case 'E':
        return 5
      case 'F':
        return 6
      case 'G':
        return 7
      case 'H':
        return 8
      case 'I':
        return 9
      default:
        return 'none'
    }
  }
}

module.exports = SudokuSolver;

