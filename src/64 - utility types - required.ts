/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf {
  first: number;
  second?: number;
}

// Partial will mark all the fields as required
function log(value: Required<Intf>) {
  console.log(value);
}

log({ first: 1, second: 2 }); // { first: 1, second: 2, }

// Next line will fail to compile:
//log({});
//log({ first: 1 });
//log({ second: 2 });
