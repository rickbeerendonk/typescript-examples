/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

let x: unknown = 123;
x = 'test';

// We know it is a string.
// TS can't verify this.
console.log('length:', (<string>x).length); // Doesn't work in .tsx (with JSX/React)
console.log('length:', (x as string).length); // Works in .tsx (with JSX/React)

export {};
