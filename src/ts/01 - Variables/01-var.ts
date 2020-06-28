/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-constant-condition:off */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */

// Set value (before declaration)
a = 1;

// Declare (after setting value)
var a;

if (true) {
  console.log(a); // 1

  // Same variable (not really a new one)
  // NO block scoping
  var a;
  a = 2;

  console.log(a); // 2
}

// Same value as inside the block
console.log(a); // 2

export {};
