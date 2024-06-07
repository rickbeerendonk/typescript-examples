/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

type IMyInterface1 = {
  first(): string;
};

interface IMyInterface2 extends IMyInterface1 {
  second(): string;
}

class MyImplementor implements IMyInterface2 {
  // Try to comment out first() and see it doesn't compile
  first(): string {
    return 'first';
  }

  second(): string {
    return 'second';
  }
}

const implementor = new MyImplementor();
const intf1: IMyInterface1 = implementor;
const intf2: IMyInterface2 = implementor;

console.log(intf1.first());
console.log(intf2.second());

export {};
