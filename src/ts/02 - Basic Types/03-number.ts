/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable no-var */

// Whole number
var a = 123;
console.log('a:', a); // 123
console.log('typeof(a):', typeof a); // number

// Numbers with fractions
var b = 4.56;
console.log('b:', b); // 4.56
console.log('typeof(b):', typeof b); // number

// Infinity
var c = 1 / 0;
console.log('c:', c); // Infinity
console.log('typeof(c):', typeof c); // number

// Not a Number
// DOES NOT COMPILE:
// var d = 'other' / 1;
var d = NaN;
console.log('d:', d); // NaN
console.log('typeof(d):', typeof d); // number

export {};
