# parseArgv

_Node.js process.argv parsed_

## Installation

````bash
$ yarn install @dkh-dev/argv
````

## Examples

Example 1

```javascript
// index.js

const argv

console.log(argv);

// $ node test --a=b -b -c d e --e --f="g h" -i=j -j='k l' -l=123
// => { a: 'b', b: true, c: 'd', e: true, f: 'g h', i: 'j', j: "'k", k: 123 }
```
