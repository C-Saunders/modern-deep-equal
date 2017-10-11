const checkEquality = (loose, v1, v2) => loose ? v1 == v2 : v1 === v2 // eslint-disable-line

module.exports = (value1, value2, loose = false) => {
  const eq = checkEquality.bind(null, loose)

  return deepEqual(value1, value2, eq)
}

const bothInstancesOf = (value1, value2, type) => value1 instanceof type && value2 instanceof type

const deepEqual = (value1, value2, eq) => {
  // primitives
  if (eq(value1, value2) || (Number.isNaN(value1) && Number.isNaN(value2))) return true

  if (typeof value1 !== typeof value2) return false

  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) return false
    return value1.every((item, index) => deepEqual(item, value2[index], eq))
  }

  if (bothInstancesOf(value1, value2, RegExp) || bothInstancesOf(value1, value2, Error)) {
    return value1.toString() === value2.toString()
  }

  if (bothInstancesOf(value1, value2, Date)) {
    return value1.getMilliseconds() === value2.getMilliseconds()
  }

  if (bothInstancesOf(value1, value2, Set) || bothInstancesOf(value1, value2, Map)) {
    if (value1.size !== value2.size) return false
    return deepEqual(Array.from(value1).sort(), Array.from(value2).sort(), eq)
  }

  // pojos
  if (typeof value1 === 'object' && typeof value2 === 'object') {
    const v1keys = Object.keys(value1)
    const v2keys = Object.keys(value2)

    if (v1keys.length !== v1keys.length) return false
    v1keys.sort()
    v2keys.sort()
    if (!deepEqual(v1keys, v2keys, eq)) return false
    return v1keys.every(key => deepEqual(value1[key], value2[key], eq))
  }

  return false
}
