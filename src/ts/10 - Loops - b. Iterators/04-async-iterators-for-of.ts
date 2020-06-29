/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

// ES 2018

const test = {
  [Symbol.asyncIterator]: function (): AsyncIterator<number, void, unknown> {
    let current = 0;
    return {
      next() {
        current++;
        return new Promise(function (resolve) {
          setTimeout(
            () => resolve({ done: false, value: current }),
            1000 * Math.random()
          );
        });
      }
    };
  }
};

void (async function () {
  for await (const n of test) {
    console.log(n);
    if (n >= 10) {
      break;
    }
  } // 1, 2, 3, ... , 10

  console.log('done');
})();

console.log('End of file...');

export {};
