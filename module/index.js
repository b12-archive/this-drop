const includes = require('array-includes');
const arrayFrom = require('array-from');

export default function drop(keys) {
  // TODO: Non-arrays
  const result = {};
  const keysArray = arrayFrom(keys);

  Object.keys(this).forEach(key => {
    if (!includes(keysArray, key)) result[key] = this[key];
  });

  return result;
}
