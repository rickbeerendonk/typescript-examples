/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

let f: [number, string?];

// Following line doesn't compile
// f = ['one', 2];

f = [1, 'two'];
console.log(f); // [1, 'two']

f = [1];
console.log(f); // [1]

export {};
