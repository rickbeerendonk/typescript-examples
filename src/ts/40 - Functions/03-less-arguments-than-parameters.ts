/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function test(a: boolean, b?: undefined) {
  console.log(a); // true
  console.log(b); // undefined
}

test(true);

export {};
