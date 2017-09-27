const test = require('tape')
const equal = require('../index.js')

const looseEqual = (value1, value2) => equal(value1, value2, true)

test('both empty', assert => {
  assert.true(equal(
    new Map(),
    new Map()
  ))
  assert.end()
})

test('one empty', assert => {
  assert.false(equal(
    new Map([['a', 'b']]),
    new Map()
  ))
  assert.end()
})

test('keys must match', assert => {
  assert.true(equal(
    new Map([['a', 1]]),
    new Map([['a', 1]])
  ))
  assert.false(equal(
    new Map([['a', 1]]),
    new Map([['b', 1]])
  ))
  assert.end()
})

test('deep equality test applies to nested items', assert => {
  assert.true(equal(
    new Map([['a', [1, 2, 3]], [1, 2], [new Date(0), { 'a': ['x', 'y'] }]]),
    new Map([[1, 2], ['a', [1, 2, 3]], [new Date(0), { 'a': ['x', 'y'] }]])
  ))
  assert.end()
})

test('looseness applies to nested items', assert => {
  assert.false(equal(
    new Map([['a', [1, 2, 3]], [1, 2], [new Date(0), { 'a': ['1', 'y'] }]]),
    new Map([[1, '2'], ['a', [1, '2', 3]], [new Date(0), { 'a': [1, 'y'] }]])
  ))
  assert.true(looseEqual(
    new Map([['a', [1, 2, 3]], [1, 2], [new Date(0), { 'a': ['1', 'y'] }]]),
    new Map([[1, '2'], ['a', [1, '2', 3]], [new Date(0), { 'a': [1, 'y'] }]])
  ))
  assert.end()
})