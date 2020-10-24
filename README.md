# [@dkh-dev/parse-argv](https://www.npmjs.com/package/@dkh-dev/parse-argv)

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

// $ node test parse --a=b -b -c d e --e --f="g h" -i=123 -j=/k l/ -k false
/* => {
        '0': 'parse',
        '1': 'e',
        '2': 'l/',
        a: 'b',
        b: true,
        c: 'd',
        e: true,
        f: 'g h',
        i: 123,
        j: '/k',
        k: false
      }
*/
```
