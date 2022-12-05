/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-array-constructor */

// TS: Doesn't compile
//console.log(1 instanceof Number); // false
console.log(new Number(1) instanceof Number); // true
console.log();

// TS: Doesn't compile
//console.log('a' instanceof String); // false
console.log(new String('a') instanceof String); // true
console.log();

// TS: Doesn't compile
//console.log(true instanceof Boolean); // false
console.log(new Boolean(true) instanceof Boolean); // true
console.log();

console.log(new Object() instanceof Object); // true
console.log(new Object() instanceof Array); // false
console.log();

console.log(new Array() instanceof Object); // true
console.log(new Array() instanceof Array); // true
console.log();

export {};
