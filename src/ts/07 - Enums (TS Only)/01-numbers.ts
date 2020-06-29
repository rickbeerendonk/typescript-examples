/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

enum color {
  'R' = 1,
  'G',
  'B' = 4
}

console.log(color.R); // 1
console.log(color.G); // 2
console.log(color.B); // 4

console.log(color[1]); // R
console.log(color[2]); // G
console.log(color[3]); // undefined
console.log(color[4]); // B

export {};
