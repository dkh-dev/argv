'use strict'

const test = require('tape')

const argv = require('..')


// $ node test parse --a=b -b -c d e --e --f="g h" -i=123 -j=/k l/ -k false
//          0: parse                1: e                     2: l/

test('argv', t => {
  const { length } = Object.keys(argv)
  const { a, b, c, e, f, i, j, k } = argv

  console.log(argv)

  t.equal(length, 11)
  t.equal(argv[ 0 ], 'parse')
  t.equal(argv[ 1 ], 'e')
  t.equal(argv[ 2 ], 'l/')
  t.equal(a, 'b')
  t.equal(b, true)
  t.equal(c, 'd')
  t.equal(e, true)
  t.equal(f, 'g h')
  t.equal(i, 123)
  t.equal(j, '/k')
  t.equal(k, false)

  try {
    t.deepEqual([ ...argv ], [ 'parse', 'e', 'l/' ])
  } catch (err) {
    t.fail(err.message)
  }

  t.end()
})
