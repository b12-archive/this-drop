import drop from './module';

const test = require('tape-catch');

test('Strips properties', (is) => {
  is.deepEqual(
    {a: 1, b: 2, c: 3}::drop(['a', 'c']),
    {b: 2},
    'in a simple case'
  );

  is.deepEqual(
    {a: {b: 2}, 'a.b': 1.2}::drop(['a.b']),
    {a: {b: 2}},
    'works when property names contain special chars'
  );

  is.end();
});

test('Ignores non-existent properties', (is) => {
  is.deepEqual(
    {a: 1, b: 2, c: 3}::drop(['d']),
    {a: 1, b: 2, c: 3},
    'in a simple case'
  );

  is.end();
});

test('Makes a shallow copy of `obj`', (is) => {
  const xyz = {x: 1, y: '2', z: [3]};
  const xz = xyz::drop(['y']);

  is.deepEqual(
    xyz,
    {x: 1, y: '2', z: [3]},
    'doesn’t mutate the input object'
  );

  is.equal(
    xyz.z,
    xz.z,
    'keeps references'
  );

  is.end();
});
