const { readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
  './temporary/FileA.txt', 
  `The result is: ${first}, ${second} \n`
);

writeFileSync(
  './temporary/FileA.txt', 
  "This is second line.\n", {flag: 'a'}
);

writeFileSync(
  './temporary/FileA.txt', 
  "This is third line.\n", {flag: 'a'}
);

const result = readFileSync('./temporary/FileA.txt', 'utf8');
console.log(result);
