const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver()

let validPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
let completePuzzle = '135762984946381257728459613694517832812936745357824196473298561581673429269145378'
let invalidPuzzleChar = 'abc..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
let invalidPuzzleLength = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37....'

suite('Unit Tests', () => {
    test('Logic handles a valid puzzle string of 81 characters', () => {
        assert.equal(solver.solve(validPuzzle), completePuzzle)
    })

    test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', () => {
        assert.equal(solver.validate(invalidPuzzleChar), 'Invalid characters in puzzle')
    })

    test('Logic handles a puzzle string that is not 81 characters in length', () => {
        assert.equal(solver.validate(invalidPuzzleLength), 'Expected puzzle to be 81 characters long')
    })

    test('Logic handles a valid row placement', () => {
        assert.isTrue(solver.checkRowPlacement(validPuzzle, 'A', 2, 3))
    })

    test('Logic handles an invalid row placement', () => {
        assert.isFalse(solver.checkRowPlacement(validPuzzle, 'A', 2, 1))
    })

    test('Logic handles a valid column placement', () => {
        assert.isTrue(solver.checkColPlacement(validPuzzle, 'A', 2, 3))
    })

    test('Logic handles an invalid column placement', () => {
        assert.isFalse(solver.checkColPlacement(validPuzzle, 'A', 2, 1))
    })

    test('Logic handles a valid region (3x3 grid) placement', () => {

    })

    test('Logic handles an invalid region (3x3 grid) placement', () => {

    })

    test('Valid puzzle strings pass the solver', () => {

    })

    test('Invalid puzzle strings fail the solver', () => {

    })

    test('Solver returns the expected solution for an incomplete puzzle', () => {

    })
});
