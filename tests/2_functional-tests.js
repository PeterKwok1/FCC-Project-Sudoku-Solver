const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

let validPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
let completePuzzle = '135762984946381257728459613694517832812936745357824196473298561581673429269145378'
let invalidPuzzleChar = 'abc..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
let invalidPuzzleLength = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37....'

suite('Functional Tests', () => {

    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', (done) => {
        chai
            .request(server)
            .post('/api/solve')
            .send({ puzzle: validPuzzle })
            .end((err, res) => {
                assert.equal(res.body.solution, completePuzzle)
                done()
            })
    })

    // test('Solve a puzzle with missing puzzle string: POST request to /api/solve', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Solve a puzzle with invalid characters: POST request to /api/solve', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Solve a puzzle with incorrect length: POST request to /api/solve', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Solve a puzzle that cannot be solved: POST request to /api/solve', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with all fields: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with single placement conflict: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with multiple placement conflicts: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with all placement conflicts: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with missing required fields: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with invalid characters: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with incorrect length: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with invalid placement coordinate: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

    // test('Check a puzzle placement with invalid placement value: POST request to /api/check', (done) => {
    //     chai
    //         .request(server)
    //         .
    //         .end((err, res) => {
    //             done()
    //         })
    // })

});

