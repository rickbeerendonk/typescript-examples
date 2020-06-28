/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

function test() {
  return ['One', 'Two'];
}

let [a, b] = test();

console.log(a); // One
console.log(b); // Two
