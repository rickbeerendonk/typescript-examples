/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

const x = (a: number, b: number, ...rest: number[]) => [a, b, rest];
console.log(x(1, 2, 3, 4)); // [ 1, 2, [3, 4] ]

export {};
