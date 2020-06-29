/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

let union: number | string;

union = 123;
console.log(union); // 123

union = 'test';
console.log(union); // test

// Next lines will fail to compile:
// union = true;
// union = {};
// union = [];

export {};
