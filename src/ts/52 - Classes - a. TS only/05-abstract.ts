/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

abstract class AbstractBase {
  abstract other(): number;

  other2(): boolean {
    return true;
  }
}

// Only 1 class can be extended (for multiple, user interfaces)
class Base extends AbstractBase {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
  toString() {
    return this.name;
  }

  other(): number {
    return 123;
  }
}

class Account extends Base {
  private balance: number;

  constructor(name: string) {
    super(name);
    this.balance = 0;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  withdraw(amount: number) {
    this.balance -= amount;
  }
  toString() {
    return `${super.toString()}: ${this.balance}`;
  }
}

// Doesn't compile:
//const abstr = new AbstractBase();

const acc = new Account('Rick');
acc.deposit(100);
acc.withdraw(25);

console.log(acc); // { name: 'Rick', balance: 75 }
console.log(acc.toString()); // Rick: 75

export {};
