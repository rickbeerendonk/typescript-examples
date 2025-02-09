/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function genericFunc<T extends string, U extends number>(value: T, count: U) {
  console.log(value.repeat(count));
}

genericFunc('test', 3); // testtesttest
genericFunc<string, number>('test', 3); // testtesttest

// Doesn't compile:
//genericFunc(null, 3);

export {};
