## Summary:
* Deep equality checking (checks nested objects)
* Support for modern JavaScript data structures

### Usage:
```javascript
const deepEq = require('modern-deep-equal')

// standard equality operators don't work for non-primitives
{'a': 1} === {'a': 1} // false, same for ==
[1, 2] === [1, 2] // false, same for ==

// the function signature is:
// deepEq(value1, value2, loose = false)

deepEq({ 'a': 1 }, { 'a': 1 }) // true

// nested values are checked
deepEq({ 'a': 1, 'b': [1, 2] }, { 'a': 1, 'b': [2, 1] }) // false

// for objects, values are compared by key
deepEq({ 'a': 1, 'b': [1, 2] }, { 'b': [1, 2], 'a': 1 }) // true

// defaults to strict equality check (using === for the primitives)
deepEq(new Set(['a', [1, 2, 3]]), new Set(['a', ['1', '2', '3']])) // false
deepEq(new Set(['a', [1, 2, 3]]), new Set(['a', ['1', '2', '3']]), true) // true
```

### Supports:
* Strict and loose equality checking modes for primitives
  * `===` vs. `==` applied to values
* Dates (millisecond value comparison)
* Regular expressions
* Errors
* [TypedArrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
* [Buffers](https://nodejs.org/api/buffer.html)
* Nested object checking for
  * POJOs (plain objects like {'a': 1})
  * Arrays
  * Maps
  * Sets

### Not supported:
* [WeakSets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) - do not have enumerable keys
* [WeakMaps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) - do not have enumerable keys

## Development:
* `git clone`
* `npm install`
* `npm run test`

### Dev notes:
* Testing with [tape](https://github.com/substack/tape)
* Linting with [Standard](https://standardjs.com/)

### Inspired by:
* https://github.com/substack/node-deep-equal
* https://github.com/epoberezkin/fast-deep-equal
