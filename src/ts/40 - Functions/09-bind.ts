/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function foo() {
  // ISSUE
  //console.log(JSON.stringify(this));
}

const foo2 = foo.bind({ name: 'bind' });

foo2.apply({ name: 'this' });
// {"name":"bind"}

export {};
