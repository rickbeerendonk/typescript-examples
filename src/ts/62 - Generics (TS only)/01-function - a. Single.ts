/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function genericFunc<T>(value: T) {
  console.log(typeof value, value);
}

genericFunc(1); // number 1
genericFunc<number>(2); // number 2

genericFunc('one'); // string one
genericFunc<string>('two'); // string two

// Doesn't compile:
//genericFunc<number>(true);

export {};
