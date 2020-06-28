/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

class Base {
  constructor(name) {
    this.name = name;
  }
  toString() {
    return this.name;
  }
}

class Account extends Base {
  constructor(name) {
    super(name);
    this.balance = 0;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
  toString() {
    return `${super.toString()}: ${this.balance}`;
  }
}

let acc = new Account('Rick');
acc.deposit(100);
acc.withdraw(25);

console.log(acc); // { name: 'Rick', balance: 75 }
console.log(acc.toString()); // Rick: 75
