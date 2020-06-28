/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/*
interface IteratorResult {
	done: boolean;
	value: any;
}
interface Iterator {
	next(): IteratorResult;
}
interface Iterable {
	[Symbol.iterator](): Iterator;
}
*/

const test = {
  [Symbol.iterator]() {
    let current = 0;
    return {
      next() {
        current++;
        return { done: false, value: current };
      }
    };
  }
};

for (const n of test) {
  if (n > 10) {
    break;
  }
  console.log(n);
} // 1, 2, 3, ... , 10

export {};
