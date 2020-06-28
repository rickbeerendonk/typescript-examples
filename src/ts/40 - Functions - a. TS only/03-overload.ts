/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// Declarations
function five(a: boolean): string;
function five(a: string, b: number): string;
// Implementation
function five(a: string | boolean, b?: number): string {
  return b ? String(a) + b.toString() : String(a);
}

console.log(five('test', 123)); // test123

console.log(five(true)); // true

// Following line does not compile
//console.log(five(Symbol('test'))); // illegal
