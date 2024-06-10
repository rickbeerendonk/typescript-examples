/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

enum Color {
  'R', // 0
  'G', // 1
  'B' // 2
}

console.log(Color.R); // 0
console.log(Color.G); // 1
console.log(Color.B); // 2

console.log(Color[0]); // R
console.log(Color[1]); // G
console.log(Color[2]); // B
console.log(Color[3]); // undefined

console.log('---');

// Enum to Number
let c: Color = Color.G;
console.log(c);

// Number to Enum
c = 2 as Color;
console.log(c);

export {};
