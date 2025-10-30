/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf1 {
  first: number;
  second: number;
  third: number;
}

// Partial will mark all the fields as optional
function log2(value: Partial<Intf1>) {
  console.log(JSON.stringify(value));
}

log2({}); // {}
log2({ second: 2 }); // { second: 2 }
log2({ first: 1, third: 3 }); // { first: 1, third: 3 }

// Next lines will fail to compile:
//log2({ first: 'one'})
//log2({ fourth: 4 }); // { fourth: 4 }

export {};
