/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function genericFunc<T>(value: T) {
  console.log(typeof value, value);
}

///////// CALLING ////////////

genericFunc(1); // number 1
genericFunc<number>(2); // number 2

genericFunc('one'); // string one
genericFunc<string>('two'); // string two

// Doesn't compile:
//genericFunc<number>(true);

///////// SPECIALIZED ////////////

type MyType = typeof genericFunc<number>;

const myFunc: MyType = genericFunc;

myFunc(3); // number 3

// Doesn't compile:
//myFunc('four');

export {};
