# parseArgv

_Node.js process.argv parsed_

## Installation

````bash
npm install @dkh-dev/argv
````

## Examples

Example 1

````typescript
// index.ts

import argv from '@dkh-dev/argv';

console.log(argv);
// ts-node index.ts --a=b -c d e -f \"g h\" -i=j --k l -m 0
// => { a: 'b', c: 'd', f: 'g h', m: '0' }
````
