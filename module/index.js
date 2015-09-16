const includes = require('array-includes');

export default function drop(keys) {
  // TODO: Non-arrays
  const result = {};

  Object.keys(this).forEach(key => {
    if (!includes(keys, key)) result[key] = this[key];
  });

  return result;
}
