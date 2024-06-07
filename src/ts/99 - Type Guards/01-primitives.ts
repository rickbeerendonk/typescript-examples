/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

// Allows TypeScript to narrow the type of the value within the block where the type guard is used.

function doSomethingWithName(obj: any) {
  if (typeof obj.name === 'string') {
    // Within this block, TypeScript knows that obj.name is a string
    console.log(obj.name.toUpperCase());
  }
}

// Nothing happens
doSomethingWithName('My text');

// Uppercase name is written to console
doSomethingWithName({ name: 'My name' });

export {};
