'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {

  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

    });

  app.route('/api/solve')
    .post((req, res) => {
      const puzzle = req.body.puzzle
      if (!puzzle) {
        res.json({ error: 'Required field missing' })
        return
      }
      const solution = solver.solve(puzzle)
      if (solution.error) {
        res.json(solution)
        return
      }
      return res.json({ solution })
    });
};
