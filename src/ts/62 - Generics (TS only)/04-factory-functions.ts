/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function factory<T>(c: { new (): T }): T {
  return new c();
}

class One {
  public first = 1;
}

class Two extends One {
  public second = 2;
}

class Three {
  public first = 1;
}

class Four {
  constructor(public first: number) {}
}

const one = factory(One);
console.log(one.first);

const two = factory(Two);
console.log('Two:', two);

const three = factory(Three);
console.log('Three:', three);

// Doesn't compile (no constructorless parameter)
//const four = factory(Four);

export {};
