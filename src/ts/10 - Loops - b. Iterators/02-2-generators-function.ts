/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function* test() {
  let current = 1;
  while (true) {
    yield current++;
  }
}

for (const n of test()) {
  if (n > 10) {
    break;
  }
  console.log(n);
}

export {};
