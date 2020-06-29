interface IPerson {
  name: string;
}

class Person implements IPerson {
  constructor(public name: string) {}
}

function show(person: IPerson) {
  console.log(person.name);
}

show(new Person('Alexandra'));

// Fine to also have an age
const obj = { name: 'Benjamin', age: 100 };
show(obj);

// Not fine to have an age.
// This object is only used to call show, so age doesn't make sense.
show({ name: 'Charlotte' /*, age: 80 */ });

export {};
