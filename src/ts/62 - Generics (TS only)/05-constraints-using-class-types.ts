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

function factory<T>(c: new () => T): T {
  return new c();
}

console.log(factory(First).prop1); // 1
console.log(factory(Second).prop2); // 2
console.log(factory(Third).prop1); // 3
console.log(factory(Fourth).prop2); // 4

export {};
