/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function foo<T>(value: T) {
  console.log(typeof value, value);
}

foo(1); // number 1
foo<number>(2); // number 2

foo('one'); // string one
foo<string>('two'); // string two

// Next lines will fail to compile:
//foo<number>(true);
