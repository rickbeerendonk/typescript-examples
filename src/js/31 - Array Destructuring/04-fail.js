/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

let someArray = [];

// No default
let [firstValue] = someArray;
console.log(firstValue); // undefined

// Default
let [firstValueOrDefault = 1] = someArray;
console.log(firstValueOrDefault); // 1
