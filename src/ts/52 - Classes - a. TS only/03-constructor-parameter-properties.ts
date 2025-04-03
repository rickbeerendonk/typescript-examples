/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

class MyClass5 {
  constructor(
    private firstName: string,
    private lastName: string
  ) {}

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const myObj5 = new MyClass5('John', 'Johnson');

// Following lines don't compile
// console.log(myObj5.firstName);
// console.log(myObj5.lastName);

console.log(myObj5.getName());
