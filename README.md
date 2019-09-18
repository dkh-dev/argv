# parseArgv

_Node.js process.argv parsed_

## Installation

````bash
$ yarn install @dkh-dev/argv
````

## Examples

Example 1

````typescript
// index.ts

import argv from '@dkh-dev/argv';

console.log(argv);
// ts-node test --a=b -b -c d e --e -f "g h" -i=j --k l -m 0
// => { a: 'b', b: '', c: 'd', e: '', f: 'g h', i: 'j', k: 'l', m: '0' }
````
