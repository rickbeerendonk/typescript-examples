/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

const a = 2;
const b = 2;
const c = 1;

// 2 < 2
console.log(a < b); // false

// 2 < 1
console.log(a < c); // false

// 1 < 2
console.log(c < a); // true

export {};
