/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable prefer-rest-params */

function test() {
  // var arguments = [true, 2, "three"]; // But not a real array!

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  // true
  // 2
  // three
}

// NOT ALLOWED
//test(true, 2, 'three');

export {};
