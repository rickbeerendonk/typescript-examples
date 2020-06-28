/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

function test() {
  return ['One', 'Two'];
}

const [a, b] = test();

console.log(a); // One
console.log(b); // Two

export {};
