/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

class MyClass<T, U> {
  value: T;
  other: U | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

function log1(value: MyClass<number, string>) {
  console.log(typeof value, value);
}

log1(new MyClass<number, string>(123)); // MyClass { value: 123 }
log1(new MyClass(123)); // MyClass { value: 123 }
log1({ value: 123, other: 'typescript' }); // object { value: 123, other: 'typescript' }

// Next lines will fail to compile:
//log1({ value: 'test', other: 'typescript' });
//log1({ value: true, other: 'typescript' });
//log1({ value: 123, other: 456 });

export {};
