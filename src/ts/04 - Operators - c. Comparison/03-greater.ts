/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

const a = 1;
const b = 1;
const c = 2;

// 1 > 1
console.log(a > b); // false

// 1 > 2
console.log(a > c); // false

// 2 > 1
console.log(c > a); // true

export {};
