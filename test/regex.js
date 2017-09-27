const test = require('tape')
const equal = require('../index.js')

test('regexp literals', assert => {
  assert.true(equal(/a/i, /a/i))
  assert.true(equal(/a/, /a/))

  assert.false(equal(/a/, /a/i))
  assert.false(equal(/a/, /ab/))

  assert.end()
})

test('regexp from constructor', assert => {
  assert.true(equal(new RegExp('a', 'g'), new RegExp('a', 'g')))
  assert.true(equal(new RegExp('a'), new RegExp('a')))

  assert.false(equal(new RegExp('a', 'g'), new RegExp('a')))
  assert.false(equal(new RegExp('a'), new RegExp('ab')))

  assert.end()
})
