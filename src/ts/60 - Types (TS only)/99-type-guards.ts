/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020-2023 Rick Beerendonk     !*/

// Defining two types with a common property and a unique property each.
type First = {
  same: string;
  unique1: number;
};

type Second = {
  same: string;
  unique2: number;
};

type Union = First | Second;

// TypeGuard function to check if a Union object is of type First
function isFirst(value: Union): value is First {
  return (value as First).unique1 !== undefined;
}

// TypeGuard function to check if a Union object is of type Second
function isSecond(value: Union): value is Second {
  return (value as Second).unique2 !== undefined;
}

let value: Union;

// Assigning an object of type First to 'value'
value = { same: 'Same', unique1: 1 };

console.log('Is First?', isFirst(value)); // true
console.log('Is Second?', isSecond(value)); // false

// Assigning an object of type Second to 'value'
value = { same: 'Same', unique2: 2 };

console.log('Is First?', isFirst(value)); // false
console.log('Is Second?', isSecond(value)); // true

export {};
