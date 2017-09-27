const test = require('tape')
const equal = require('../index.js')

const looseEqual = (value1, value2) => equal(value1, value2, true)

test('array must be the same size', assert => {
  assert.false(equal([1], []))
  assert.false(looseEqual([1], []))

  assert.false(equal([1, 2], [1]))
  assert.false(looseEqual([1, 2], [1]))

  assert.end()
})

test('basic arrays', assert => {
  assert.true(equal([1, 2, 3], [1, 2, 3]))
  assert.true(equal(['a', 'b'], ['a', 'b']))

  assert.false(equal([1, '2', 3], [1, 2, 3]))
  assert.true(looseEqual([1, '2', 3], [1, 2, 3]))

  assert.end()
})

test('array position matters', assert => {
  assert.false(equal([1, 2, 3], [1, 3, 2]))
  assert.end()
})

test('deep equality test applies to nested items', assert => {
  assert.true(equal([1, 2, [1, 2]], [1, 2, [1, 2]]))

  assert.false(equal([1, 2, [1, 2]], [1, 2, 1, 2]))
  assert.false(equal([1, 2, [1, 2]], [1, 2, [2, 1]]))

  assert.end()
})

test('looseness applies to nested items', assert => {
  assert.false(equal(
    [1, 2, { 'a': 1 }],
    [1, 2, { 'a': '1' }]
  ))
  assert.true(looseEqual(
    [1, 2, { 'a': 1 }],
    [1, 2, { 'a': '1' }]
  ))
  assert.end()
})