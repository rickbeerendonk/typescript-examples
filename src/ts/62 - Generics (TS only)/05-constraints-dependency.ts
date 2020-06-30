/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

class First {
  prop1 = 1;
}

class Second extends First {
  prop2 = 2;
}

class Third {
  prop3 = 3;
}

class Fourth extends Third {
  prop4 = 4;
}

function genericFunc<T, U extends T>(val1: T, val2: U) {
  console.log(Object.keys(val1), Object.keys(val2));
}

// Compiles
genericFunc(new First(), new Second());
genericFunc(new Third(), new Fourth());

// Doesn't compile
//genericFunc(new First(), new Fourth());

export {};
