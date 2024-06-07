/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

interface IMyInterface {
  first(): string;
}

interface IMyInterface {
  second(): string;
}

class MyImplementor implements IMyInterface {
  // Try to comment out first() or second() and see it doesn't compile
  first(): string {
    return 'first';
  }

  second(): string {
    return 'second';
  }
}

const implementor = new MyImplementor();
const intf1: IMyInterface = implementor;
const intf2: IMyInterface = implementor;

console.log(intf1.first());
console.log(intf2.second());

export {};
