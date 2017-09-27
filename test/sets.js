const test = require('tape')
const equal = require('../index.js')

const looseEqual = (value1, value2) => equal(value1, value2, true)

test('both empty', assert => {
  assert.true(equal(new Set(), new Set()))
  assert.end()
})

test('one empty', assert => {
  assert.false(equal(new Set([1]), new Set()))
  assert.end()
})

test('order does not matter', assert => {
  assert.true(equal(
    new Set([1, 2, 1, 3, 'a']),
    new Set([3, 'a', 3, 2, 1, 'a'])
  ))
  assert.end()
})

test('deep equality test applies to nested items', assert => {
  assert.true(equal(
    new Set(['a', [1, 2, 3], 1, 2, new Date(0), {'a': ['x', 'y']}]),
    new Set([1, 'a', 2, { 'a': ['x', 'y'] }, new Date(0), [1, 2, 3]])
  ))
  assert.end()
})

test('Sets - looseness applies to nested items', assert => {
  assert.false(equal(
    new Set(['a', [1, 2, 3]]),
    new Set(['a', ['1', '2', '3']])
  ))
  assert.true(looseEqual(
    new Set(['a', [1, 2, 3]]),
    new Set(['a', ['1', '2', '3']])
  ))
  assert.end()
})