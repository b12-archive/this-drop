[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/this-drop.svg?style=flat-square)
](https://coveralls.io/r/studio-b12/this-drop)
 [![Travis – build status
](https://img.shields.io/travis/studio-b12/this-drop/master.svg?style=flat-square)
](https://travis-ci.org/studio-b12/this-drop)
 [![David – status of dependencies
](https://img.shields.io/david/studio-b12/this-drop.svg?style=flat-square)
](https://david-dm.org/studio-b12/this-drop)
 [![Stability: experimental
](https://img.shields.io/badge/stability-experimental-yellow.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




<a                                                             id="/"></a>&nbsp;

::drop()
========

**Return the `this` object stripped of some properties.**

<a                                                      id="/example"></a>&nbsp;

```js
const drop = require('this-drop');
const abc = {a: 1, b: 2, c: 3};

abc::drop(['a', 'c']);
//» {b: 2}
```




<a                                                 id="/installation"></a>&nbsp;

Installation
------------

```sh
$ npm install this-drop
```




<a                                                        id="/usage"></a>&nbsp;

Usage
-----

<pre>
object::drop(keys)
  ⇒ newObject
</pre>

See the [example above](#/example).

`keys` should be iterable – you’ll probably want to use an array here.

We don’t mutate the `object`. We make a shallow copy instead:

```js
const xyz = {x: 1, y: '2', z: [3]};
const xz = xyz::drop(['y']);

xyz.z === xz.z;
//» true
```

Note that the example uses the ES 2016 [function bind syntax](https://github.com/zenparsing/es-function-bind). You can still use the library in any JS engine down to ES5 though:

```js
drop.call(abc, ['a', 'c']);
//» {b: 2}
```




<a                                                      id="/license"></a>&nbsp;

License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
