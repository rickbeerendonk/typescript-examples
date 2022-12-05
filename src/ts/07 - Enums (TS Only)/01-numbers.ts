/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

enum Color {
  'R' = 1,
  'G',
  'B' = 4
}

console.log(Color.R); // 1
console.log(Color.G); // 2
console.log(Color.B); // 4

console.log(Color[1]); // R
console.log(Color[2]); // G
console.log(Color[3]); // undefined
console.log(Color[4]); // B

export {};
