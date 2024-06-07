/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

type StringType = 'active' | 'inactive';

const status: StringType = 'active';
console.log(status);

type ObjectType = {
  name: string;
  age: number;
};

const person: ObjectType = { name: 'Rick', age: 51 };
console.log(person);

export {};
