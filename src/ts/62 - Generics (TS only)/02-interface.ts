/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf1<T> {
  value: T;
}

function log1(value: Intf1<number>) {
  console.log(typeof value, value);
}

log1({ value: 123 }); // object { value: 123 }

// Next lines will fail to compile:
//log1({ value: 'test' });
//log1({ value: true });

export {};
