/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/ban-types */

function myClassDecorator(constructor: Function) {
  console.log(`MyClassDecorator for "${constructor.toString()}" executed.`);
}

@myClassDecorator
class MyClass {
  constructor() {
    console.log('myClass created.');
  }
}

new MyClass();
// MyClassDecorator for "function myClass() {
//   console.log('myClass created.');
// }" executed.
// myClass created.

export {};
