/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf<T> {
  value: T;
}

function foo(value: Intf<number>) {
  console.log(typeof value, value);
}

foo({ value: 123 }); // object { value: 123 }

// Next lines will fail to compile:
//foo({ value: 'test' });
//foo({ value: true });
