/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

type ObjWithName = {
  name: string;
};

// Declarations
function five(a: ObjWithName): string;
function five(a: string, b: number): string;
// Implementation
function five(a: string | ObjWithName, b?: number): string {
  return b ? <string>a + b.toString() : (<ObjWithName>a).name;
}

console.log(five('test', 123)); // test123

console.log(five({ name: 'test' })); // test

// Following lines don't compile
//console.log(five({ name: 'test' }, 123));
//console.log(five(true)); // illegal

export {};
