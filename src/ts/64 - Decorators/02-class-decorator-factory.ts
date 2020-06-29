/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// Factory
function myClassDecoratorFactory(data: { value: number }) {
  // Decorator
  return function myClassDecorator<T extends { new (...args: any[]): any }>(
    constructor: T
  ) {
    return class extends constructor {
      public val: number = data.value;
    };
  };
}

@myClassDecoratorFactory({
  value: 123
})
class MyClass4 {
  constructor() {
    // Nothing
  }
}

const obj4: any = new MyClass4();

console.log(obj4.val); // 123

export {};
