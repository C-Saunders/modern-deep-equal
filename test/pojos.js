const test = require('tape')
const equal = require('../index.js')

const looseEqual = (value1, value2) => equal(value1, value2, true)

test('empty objects', assert => {
  assert.true(equal({}, {}))
  assert.end()
})

test('one empty object', assert => {
  assert.false(equal({'a': 1}, {}))
  assert.end()
})

test('keys must match but order does not matter', assert => {
  assert.true(equal(
    { 'a': 1, 'b': 1 },
    { 'b': 1, 'a': 1 }
  ))
  assert.end()
})

test('comparison looseness does not apply to keys', assert => {
  assert.true(equal(
    { 1: 1, 2: 1 },
    { '1': 1, '2': 1 }
  ))

  assert.true(looseEqual(
    { 1: 1, 2: 1 },
    { '1': 1, '2': 1 }
  ))
  assert.end()
})

test('deep equality test applies to nested items', assert => {
  assert.true(equal(
    { 'a': 1, 'b': [1, 2] },
    { 'b': [1, 2], 'a': 1 }
  ))
  assert.false(equal(
    { 'a': 1, 'b': [1, 2] },
    { 'b': [1, 2, 3], 'a': 1 }
  ))
  assert.true(equal(
    { 'a': 1, 'b': {1: 2} },
    { 'b': {1: 2}, 'a': 1 }
  ))
  assert.end()
})

test('looseness applies to nested items', assert => {
  assert.false(equal(
    { 'a': 1, 'b': [1, 2] },
    { 'b': ['1', '2'], 'a': 1 }
  ))
  assert.true(looseEqual(
    { 'a': 1, 'b': [1, 2] },
    { 'b': ['1', '2'], 'a': 1 }
  ))
  assert.false(equal(
    { 'a': 1, 'b': { 1: 2 } },
    { 'b': { 1: '2' }, 'a': 1 }
  ))
  assert.end()
})

test('NaN value', assert => {
  assert.true(equal({'a': NaN}, {'a': 0 / 0}))
  assert.end()
})
