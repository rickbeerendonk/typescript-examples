/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

class First {
  prop1 = 1;
}

class Second extends First {
  prop2 = 2;
}

class Third {
  prop1 = 3;
}

class Fourth {
  prop2 = 4;
}

function genericFunc<T extends First>(value: T) {
  console.log(value.prop1);
}

// Works: Obvious
genericFunc(new First());
genericFunc(new Second());

// Works: Less obvious
genericFunc(new Third());
genericFunc({ prop1: 123 });
genericFunc({ prop1: 123, prop2: 456 });

// Doesn't work
//genericFunc(new Fourth());

export {};
