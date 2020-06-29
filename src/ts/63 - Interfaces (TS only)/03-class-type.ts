/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

interface IMyInterface1 {
  first(): string;
}

interface IMyInterface2 {
  second(): string;
}

class MyImplementor implements IMyInterface1, IMyInterface2 {
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
