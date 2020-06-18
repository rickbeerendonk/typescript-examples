/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf {
  first: number;
  second: number;
  third: number;
}

// Partial will mark all the fields as optional
function log(value: Partial<Intf>) {
  console.log(value);
}

log({}); // {}
log({ second: 2 }); // { second: 2 }
log({ first: 1, third: 3 }); // { first: 1, third: 3 }

// Next line will fail to compile:
//log({ fourth: 4 }); // { fourth: 4 }
