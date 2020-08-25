# argv

_Node.js process.argv parsed_

## Installation

````bash
$ yarn install @dkh-dev/argv
````

## Examples

`argv.ts`

```javascript
import argv from '@dkh-dev/argv'

console.log(argv);

// $ node test --a=b -b -c d e --e --f="g h" -i=123 -j=/k l/ -k
// => { a: 'b', b: true, c: 'd', e: true, f: 'g h', i: 123, j: '/k', k: true }
```
