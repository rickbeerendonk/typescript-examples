/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-constant-condition:off */
/* eslint-disable prefer-const */

// NO set value (before declaration)
// a = 1;

// Declare (after setting value)
let a = 1;

if (true) {
  // Cannot access 'a' before initialization
  //console.log(a);

  // New variable
  // Block scoping
  let a = 2;

  console.log(a); // 2
}

// Other value than inside the block
console.log(a); // 1

export {};
