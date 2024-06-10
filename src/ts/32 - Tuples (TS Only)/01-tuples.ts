/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// Array
// const a: (number | string)[] = [1, 'two'];

// Tuple
const t: [number, string] = [1, 'two'];

// Following line doesn't compile
//t = ['one', 2];

//t.pop();
//t.push('three');

// t[2] = 3;

console.log(t); // [1, 'two']

export {};
