/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

function createPerson(name: string, age: number) {
  return { name, age };
}

type Person = ReturnType<typeof createPerson>;

const person: Person = createPerson('Alexandra', 34);

console.log(person);

export {};
