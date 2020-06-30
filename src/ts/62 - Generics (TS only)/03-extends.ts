/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

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
  public first = 'one';
}

function genericFunc<T extends One>(value: T) {
  console.log(value.first);
}

genericFunc(new One());
genericFunc(new Two());

// Does compile!!!
genericFunc(new Three());
genericFunc({ first: 123, second: 222 });

// Doesn't compile
//genericFunc(new Four());

export {};
