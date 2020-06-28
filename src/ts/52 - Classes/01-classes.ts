/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

class Base {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  toString() {
    return this.name;
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

const acc = new Account('Rick');
acc.deposit(100);
acc.withdraw(25);

console.log(acc); // { name: 'Rick', balance: 75 }
console.log(acc.toString()); // Rick: 75

export {};
