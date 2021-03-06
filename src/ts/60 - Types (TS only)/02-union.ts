/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type Union = number | string;

let union: Union;

union = 123;
console.log(union); // 123

union = 'test';
console.log(union); // test

// Next lines will fail to compile:
// union = true;
// union = {};
// union = [];

export {};
