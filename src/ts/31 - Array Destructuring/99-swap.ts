/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

let first = 'One';
let second = 'Two';

[first, second] = [second, first];

console.log(first); // Two
console.log(second); // One

export {};
