/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

let a: any;

// Can be anything

a = true;
console.log('Boolean: ', a); // true

a = 123;
console.log('Number: ', a); // 123

a = 'text';
console.log('String: ', a); // text

// Doesn't require a "cast"
const x: string = a;
console.log('x: ', x);

a = {
  foo: function () {
    return 'foo';
  }
};
// Doesn't require a "cast"
console.log('a.foo():', a.foo());

export {};
