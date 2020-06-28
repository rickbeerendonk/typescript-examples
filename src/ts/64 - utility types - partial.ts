/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf2 {
  first: number;
  second: number;
  third: number;
}

// Partial will mark all the fields as optional
function log2(value: Partial<Intf2>) {
  console.log(value);
}

log2({}); // {}
log2({ second: 2 }); // { second: 2 }
log2({ first: 1, third: 3 }); // { first: 1, third: 3 }

// Next line will fail to compile:
//log({ fourth: 4 }); // { fourth: 4 }

export {};
