/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-constant-condition:off */

// NO set value (before declaration)
// a = 1;

// Declare (after setting value)
const a = 1;

if (true) {
  // Cannot access 'b' before initialization
  //console.log(b);

  // New variable
  // Block scoping
  const b = 2;

  console.log(a); // 1
  console.log(b); // 2
}

// ReferenceError: b is not defined
console.log(b);

export {};
