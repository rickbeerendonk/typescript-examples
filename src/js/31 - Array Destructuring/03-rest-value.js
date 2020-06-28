/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

let data = [1, 22, 333, 4444];
let [a, b, ...rest] = data;

console.log(a); // 1
console.log(b); // 22
console.log(rest); // [333, 4444]
