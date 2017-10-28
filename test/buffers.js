const test = require('tape')
const equal = require('../index.js')

test('buffers made with .from', assert => {
  assert.true(equal(Buffer.from('foo'), Buffer.from('foo')))
  assert.false(equal(Buffer.from('foo'), Buffer.from('bar')))
  assert.end()
})

test('buffers made with .alloc', assert => {
  assert.true(equal(Buffer.alloc(10), Buffer.alloc(10)))
  assert.false(equal(Buffer.alloc(10), Buffer.alloc(1)))
  assert.end()
})
