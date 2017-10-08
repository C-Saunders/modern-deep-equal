const test = require('tape')
const equal = require('../index.js')

const looseEqual = (value1, value2) => equal(value1, value2, true)

test('numeric equality', assert => {
  assert.true(equal(1, 1))
  assert.true(looseEqual(1, 1))

  assert.false(equal(1, '1'))
  assert.true(looseEqual(1, '1'))

  assert.end()
})

test('string equality', assert => {
  assert.true(equal('', ''))
  assert.true(equal('a', 'a'))
  assert.false(equal('a', 'A'))
  assert.false(equal('a', ''))
  assert.end()
})

test('null and undefined', assert => {
  assert.true(equal(null, null))
  assert.true(looseEqual(null, null))

  assert.false(equal(null, undefined))
  assert.true(looseEqual(null, undefined))

  assert.end()
})

test('booleans', assert => {
  assert.false(equal(true, '1'))
  assert.true(looseEqual(true, '1'))

  assert.false(equal(true, 1))
  assert.true(looseEqual(true, 1))

  assert.false(equal(false, '0'))
  assert.true(looseEqual(false, '0'))

  assert.false(equal(false, 0))
  assert.true(looseEqual(false, 0))

  assert.false(equal(false, ''))
  assert.true(looseEqual(false, ''))

  assert.false(equal(false, []))
  assert.true(looseEqual(false, []))

  assert.end()
})

test('NaNs', assert => {
  assert.true(equal(NaN, 0 / 0))
  assert.true(looseEqual(NaN, 0 / 0))
  assert.end()
})
