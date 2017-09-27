const test = require('tape')
const equal = require('../index.js')

test('equal dates', assert => {
  assert.true(equal(new Date(0), new Date(0)))
  assert.end()
})

test('unequal dates', assert => {
  assert.false(equal(new Date(0), new Date(1)))
  assert.end()
})
