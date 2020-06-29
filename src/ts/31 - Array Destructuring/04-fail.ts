/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

const someArray: string[] = [];

// No default
const [firstValue] = someArray;
console.log(firstValue); // undefined

// Default
const [firstValueOrDefault = 'Default'] = someArray;
console.log(firstValueOrDefault); // Default

export {};
