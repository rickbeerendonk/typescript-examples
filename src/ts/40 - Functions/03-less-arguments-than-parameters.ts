/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function test(a: boolean, b?: number) {
  console.log(a);
  console.log(b);
}

test(true); // true, undefined
test(true, 123); // true, 123

export {};
