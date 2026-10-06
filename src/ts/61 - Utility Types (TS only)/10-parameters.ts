/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

function describePerson(name: string, age: number) {
  return `${name} is ${age} years old.`;
}

type DescribePersonParameters = Parameters<typeof describePerson>;

const person: DescribePersonParameters = ['Alexandra', 34];

console.log(describePerson(...person));

export {};
