/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

enum Color {
  R = 'RED',
  G = 'GREEN',
  B = 'BLUE'
}

console.log(Color.R); // RED
console.log(Color.G); // GREEN
console.log(Color.B); // BLUE

console.log('---');

// Enum
let c: Color = Color.R;
console.log(c);

// String to Color
c = 'BLUE' as Color;
console.log(c);

export {};
