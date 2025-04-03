/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf1<T> {
  value: T;
  method(value: T): T;
}

function log1(value: Intf1<number>) {
  console.log(typeof value, value);
}

log1({ value: 123, method: (x) => x }); // object { value: 123, method: [Function] }

// Next lines will fail to compile:
//log1({ value: 'test', method: (x) => x } });
//log1({ value: true, method: (x) => x } });

export {};
