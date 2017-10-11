## Summary:
* Deep equality checking (checks nested objects)
* Support for modern JavaScript data structures

### Supports:
* Strict and loose equality checking modes for primitives
  * `===` vs. `==` applied to values
* Dates (millisecond value comparison)
* Regular expressions
* Errors
* Nested object checking for
  * POJOs ({'a': 1})
  * Arrays
  * Maps
  * Sets

### Not supported:
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet](WeakSets) - do not have enumerable keys
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap](WeakMaps) - do not have enumerable keys

## Development:
* `git clone`
* `npm install`
* `npm run test`

### Dev notes:
* Testing with [https://github.com/substack/tape](tape)
* Linting with [https://standardjs.com/](Standard)

### Inspired by:
* https://github.com/substack/node-deep-equal
* https://github.com/epoberezkin/fast-deep-equal
