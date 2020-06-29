/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

let a: unknown;

// Can be anything

a = true;
console.log('Boolean: ', a); // true

a = 123;
console.log('Number: ', a); // 123

a = 'text';
console.log('String: ', a); // text

// Does require a "cast"
const x: string = <string>a;
console.log('x: ', x);

type Foo = { foo(): string };
a = {
  foo: function () {
    return 'foo';
  }
};
// Does require a "cast"
console.log('a.foo():', (<Foo>a).foo()); // Doesn't work in .tsx (with JSX/React)
console.log('a.foo():', (a as Foo).foo()); // Works in .tsx (with JSX/React)

export {};
