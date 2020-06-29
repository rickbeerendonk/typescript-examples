/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

const symbol1 = Symbol('rick/one');
const symbol2 = Symbol('rick/one');
const symbol3 = Symbol.for('rick/one');
const symbol4 = Symbol.for('rick/one');

let s1, s2: symbol;

// See: https://github.com/microsoft/TypeScript/issues/28668

s1 = symbol1;
s2 = symbol2;
console.log('Symbol("rick/one") === Symbol("rick/one")', s1 === s2); // false

s2 = symbol3;
console.log('Symbol("rick/one") === Symbol.for("rick/one")', s1 === s2); // false

s1 = symbol4;
s2 = symbol3;
console.log('Symbol.for("rick/one") === Symbol.for("rick/one")', s1 === s2); // true

/*
Symbol.hasInstance
Symbol.iterator
*/
