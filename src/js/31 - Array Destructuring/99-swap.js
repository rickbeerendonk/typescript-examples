/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

let a = 'One';
let b = 'Two';

[a, b] = [b, a];

console.log(a); // Two
console.log(b); // One
