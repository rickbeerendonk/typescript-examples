/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-inferrable-types */

var a: boolean = true;
console.log('a:', a); // true
console.log('typeof(a):', typeof a); // boolean

var b: boolean = false;
console.log('b:', b); // false
console.log('typeof(b): ', typeof b); // boolean

var c: boolean = 1 < 2;
console.log('c:', c); // true
console.log('typeof(c):', typeof c); // boolean

// Doesn't compile
// a = 'does not compile';

export {};
