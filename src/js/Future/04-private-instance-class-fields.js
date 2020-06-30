/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */

// https://github.com/tc39/proposal-class-fields

// ES Stage 3
// TS 3.8

class Test {
  #privateValue;
  publicValue;

  constructor() {
    this.#privateValue = 2;
    this.publicValue = 2;
  }

  sum() {
    return this.#privateValue + this.publicValue;
  }
}

const test = new Test();

// Doesn't compile:
//console.log('Private value:', test.#privateValue);

console.log('Private value:', test.privateValue);
console.log('Public value:', test.publicValue);
console.log('Sum:', test.sum());
