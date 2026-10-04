/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// Allows TypeScript to narrow the type of the value within the block where the type guard is used.

interface Person {
  name: string;
}

function doSomethingWithPerson(obj: any) {
  if (typeof obj === 'object' && 'name' in obj) {
    // Within this block, TypeScript knows that obj is a Person and name is a string
    console.log(obj.name.toUpperCase());
  }
}
// Nothing happens
doSomethingWithPerson('My text');

// Uppercase name is written to console
doSomethingWithPerson({ name: 'My name' });

export {};
