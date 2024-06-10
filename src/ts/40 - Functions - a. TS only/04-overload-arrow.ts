/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2024 Rick Beerendonk     !*/

type ObjWithName = {
  name: string;
};

// Define the function types
type SixFunction = {
  (a: string, b: number): string;
  (a: ObjWithName): string;
};

// Implementation using arrow function with type assertion
const six: SixFunction = (a: string | ObjWithName, b?: number): string => {
  return b !== undefined ? <string>a + b.toString() : (<ObjWithName>a).name;
};

console.log(six('test', 0)); // test123

console.log(six({ name: 'test' })); // test

// Following lines don't compile
//console.log(six({ name: 'test' }, 123));
//console.log(six('abc'));
//console.log(six(true)); // illegal

export {};
