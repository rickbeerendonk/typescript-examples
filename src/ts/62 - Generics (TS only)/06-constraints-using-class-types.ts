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

function genericFunc<T>(c: new () => T) {
  return new c();
}

console.log(genericFunc(First).prop1); // 1
console.log(genericFunc(Second).prop2); // 2
console.log(genericFunc(Third).prop1); // 3
console.log(genericFunc(Fourth).prop2); // 4

export {};
