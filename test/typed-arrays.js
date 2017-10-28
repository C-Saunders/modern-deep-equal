const test = require('tape')
const equal = require('../index.js')

test('equal Float32Arrays', assert => {
  assert.true(equal(new Float32Array([1, 2]), new Float32Array([1, 2])))
  assert.end()
})

test('equal Float32Arrays', assert => {
  assert.true(equal(new Float32Array([1, 2]), new Float32Array([1, 2])))
  assert.end()
})

test('equal Float64Arrays', assert => {
  assert.true(equal(new Float64Array([1, 2]), new Float64Array([1, 2])))
  assert.end()
})

test('equal Float64Arrays', assert => {
  assert.true(equal(new Float64Array([1, 2]), new Float64Array([1, 2])))
  assert.end()
})

test('equal Int16Arrays', assert => {
  assert.true(equal(new Int16Array([1, 2]), new Int16Array([1, 2])))
  assert.end()
})

test('equal Int16Arrays', assert => {
  assert.true(equal(new Int16Array([1, 2]), new Int16Array([1, 2])))
  assert.end()
})

test('equal Int32Arrays', assert => {
  assert.true(equal(new Int32Array([1, 2]), new Int32Array([1, 2])))
  assert.end()
})

test('equal Int32Arrays', assert => {
  assert.true(equal(new Int32Array([1, 2]), new Int32Array([1, 2])))
  assert.end()
})

test('equal Int8Arrays', assert => {
  assert.true(equal(new Int8Array([1, 2]), new Int8Array([1, 2])))
  assert.end()
})

test('equal Int8Arrays', assert => {
  assert.true(equal(new Int8Array([1, 2]), new Int8Array([1, 2])))
  assert.end()
})

test('equal Uint16Arrays', assert => {
  assert.true(equal(new Uint16Array([1, 2]), new Uint16Array([1, 2])))
  assert.end()
})

test('equal Uint16Arrays', assert => {
  assert.true(equal(new Uint16Array([1, 2]), new Uint16Array([1, 2])))
  assert.end()
})

test('equal Uint32Arrays', assert => {
  assert.true(equal(new Uint32Array([1, 2]), new Uint32Array([1, 2])))
  assert.end()
})

test('equal Uint32Arrays', assert => {
  assert.true(equal(new Uint32Array([1, 2]), new Uint32Array([1, 2])))
  assert.end()
})

test('equal Uint8Arrays', assert => {
  assert.true(equal(new Uint8Array([1, 2]), new Uint8Array([1, 2])))
  assert.end()
})

test('equal Uint8Arrays', assert => {
  assert.true(equal(new Uint8Array([1, 2]), new Uint8Array([1, 2])))
  assert.end()
})

test('equal Uint8ClampedArrays', assert => {
  assert.true(equal(new Uint8ClampedArray([1, 2]), new Uint8ClampedArray([1, 2])))
  assert.end()
})

test('equal Uint8ClampedArrays', assert => {
  assert.true(equal(new Uint8ClampedArray([1, 2]), new Uint8ClampedArray([1, 2])))
  assert.end()
})

test('typed arrays of different sizes', assert => {
  assert.false(equal(new Uint16Array([1, 2]), new Uint16Array([1])))
  assert.end()
})

test('typed arrays with different content', assert => {
  assert.false(equal(new Uint16Array([1, 2]), new Uint16Array([2, 3])))
  assert.end()
})

test('typed arrays with different order of same content', assert => {
  assert.false(equal(new Uint16Array([1, 2]), new Uint16Array([2, 1])))
  assert.end()
})
