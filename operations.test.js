// "import" the sum function from operations.js
const {sum} = require('./operations')

//TODO: uncomment the next line
const {subtract} = require('./operations')

const {division} = require('./operations')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('adds 0 + 4 to equal 4', () => {
    expect(sum(0, 4)).toBe(4)
});

test('adds -1 + (-7) to equal -8', () => {
    expect(sum(-1, -7)).toBe(-8)
});

test('subtracts 6 - 2 to equal 4', () => {
    expect(subtract(6, 2)).toBe(4)
});

test('subtracts 10 - 10 to equal 0', () => {
    expect(subtract(10, 10)).toBe(0)
});

test('subtracts -1 - (-2) to equal 1', () => {
    expect(subtract(-1, -2)).toBe(1)
});

test('divides 1 / 1 to equal 1', () => {
    expect(division(1, 1)).toBe(1)
});

test('divides 1 / 0 to equal 0', () => {
    expect(division(0, 0)).toBe(0)
});

test('divides 4 / 2 to equal 2', () => {
    expect(division(4, 2)).toBe(2)
});
