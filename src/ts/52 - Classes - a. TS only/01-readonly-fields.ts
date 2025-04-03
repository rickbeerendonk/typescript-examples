/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

class MyClass1 {
  readonly isReadOnly: boolean;

  constructor(isReadOnly: boolean) {
    this.isReadOnly = isReadOnly;
  }
}

const myObj1 = new MyClass1(true);

// Following line doesn't compile
//myObj1.isReadOnly = false;

console.log(myObj1.isReadOnly); // true
