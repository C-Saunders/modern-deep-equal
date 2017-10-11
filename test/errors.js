const test = require('tape')
const equal = require('../index.js')

test('Base error', assert => {
  assert.true(equal(new Error('foo'), new Error('foo')))
  assert.false(equal(new Error('foo'), new Error('bar')))

  assert.end()
})

test('Fancy error', assert => {
  assert.true(equal(new TypeError('foo'), new TypeError('foo')))
  assert.false(equal(new TypeError('foo'), new Error('foo')))

  assert.end()
})

test('Errors without messages', assert => {
  assert.true(equal(new Error(), new Error()))
  assert.false(equal(new Error('foo'), new Error()))

  assert.end()
})
