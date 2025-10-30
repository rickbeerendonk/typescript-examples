/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/* eslint-disable prefer-const */

const original = { name: 'Alexandra', age: 34 };

let copy: typeof original;

copy = { name: 'Brian', age: 28 };

// The next line will fail to compile:
//copy = { name: 'Charlie', age: 'thirty' };
//copy = { name: 'Diana' };
//copy = { age: 40 };
//copy = { name: 'Eve', age: 25, city: 'New York' };
//copy = 'Not an object';

export {};
