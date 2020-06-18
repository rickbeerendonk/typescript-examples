/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type Union = number | string;

let x: Union;

x = 123;
console.log(x); // 123

x = 'test';
console.log(x); // test

// Next lines will fail to compile:
// x = true;
// x = {};
// x = [];
