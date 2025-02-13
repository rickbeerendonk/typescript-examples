/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

function genericFunc<T, U>(value1: T, value2: U) {
  console.log(typeof value1, value1);
  console.log(typeof value2, value2);
}

genericFunc(1, 'one');
// number 1
// string one

genericFunc<number, string>(2, 'two');
// number 2
// string two

// Doesn't compile:
//genericFunc<number, string>('three', 3);

export {};
