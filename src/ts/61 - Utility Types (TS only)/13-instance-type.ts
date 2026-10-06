/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

class Person {
  constructor(public name: string) {}
}

type PersonInstance = InstanceType<typeof Person>;

const person1: PersonInstance = new Person('Alexandra');
console.log(person1.name);

const person2: PersonInstance = { name: 'Benjamin' };
console.log(person2.name);

export {};
