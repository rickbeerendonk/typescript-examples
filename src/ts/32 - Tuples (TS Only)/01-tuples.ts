/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

const f: [number, string] = [1, 'two'];

// Following line doesn't compile
// f = ['one', 2];

console.log(f); // [1, 'two']

export {};
