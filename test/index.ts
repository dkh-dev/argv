'use strict';

import test from 'tape';
import argv from '..';

// ts-node test --a=b -c d e -f \"g h\" -i=j --k l -m 0

// console.log(parseArgv(process.argv));
// => { a: 'b', b: '', c: 'd', e: '', f: 'g h', i: 'j', k: 'l', m: '0' }

test('Test with process.argv', t => {
    t.plan(10);

    const { a, b, c, e, f, i, k, m, o } = argv

    t.comment(JSON.stringify(argv));

    t.equal(Object.keys(argv).length, 9);

    t.equal(a, 'b');
    t.equal(b, '');
    t.equal(c, 'd');
    t.equal(e, '');
    t.equal(f, 'g h');
    t.equal(i, 'j');
    t.equal(k, 'l');
    t.equal(m, '0');
    t.equal(o, '');
});
