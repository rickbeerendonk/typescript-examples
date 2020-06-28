/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Single quotes
var a: string = 'one';
console.log('a:', a); // one
console.log('typeof(a):', typeof a); // string

// Double quotes
var b: string = 'two';
console.log('b:', b); // two
console.log('typeof(b):', typeof b); // string

// One character
var c: string = 'c';
console.log('c:', c); // c
console.log('typeof(c):', typeof c); // string

// Doesn't compile
// a = 123;

export {};
