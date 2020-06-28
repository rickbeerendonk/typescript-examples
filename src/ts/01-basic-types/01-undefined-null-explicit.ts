/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */

var a: undefined;
console.log('a:', a); // undefined
console.log('typeof(a):', typeof a); // undefined

var b: undefined = undefined;
console.log('b:', b); // undefined
console.log('typeof(b): ', typeof b); // undefined

var c: any = null;
console.log('c:', c); // null
console.log('typeof(c):', typeof c); // object

// Doesn't compile
// a = 'does not compile';

export {};
