/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/require-await */

// ES 2018

async function* asyncTest() {
  try {
    let current = 1;
    while (true) {
      yield current++;
    }
  } finally {
    console.log('User breaks out of the loop.');
  }
}

void (async function () {
  for await (const n of asyncTest()) {
    console.log(n);
    if (n >= 10) {
      break;
    }
  }

  console.log('done');
})();

console.log('End of file...');

export {};
