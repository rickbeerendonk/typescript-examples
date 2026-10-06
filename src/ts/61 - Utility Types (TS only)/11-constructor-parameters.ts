/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

type PersonConstructorParameters = ConstructorParameters<typeof Person>;

const parameters: PersonConstructorParameters = ['Alexandra', 34];
const person = new Person(...parameters);

console.log(person.name, person.age);

export {};
