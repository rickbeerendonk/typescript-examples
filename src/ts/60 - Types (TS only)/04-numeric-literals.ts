/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type Option = 1 | 3 | 5;

let option: Option;

option = 1;
console.log(option); // 1

option = 5;
console.log(option); // 5

// Next lines will fail to compile:
// option = 2;
// option = 'Two';
// option = null;

export {};
