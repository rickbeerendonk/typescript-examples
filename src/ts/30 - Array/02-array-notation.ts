/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

const a = [true, 2, 'three'];
console.log(JSON.stringify(a)); // [true,2,"three"]
console.log(a.length); // 3

let b: number[];
b = [4, 5];
b = [1, 2, 3];
console.log(JSON.stringify(b)); // [1, 2, 3]

export {};
