/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf1 {
  first: number;
  second?: number;
}

// Required will mark all the fields as required
function log2(value: Required<Intf1>) {
  console.log(value);
}

log2({ first: 1, second: 2 }); // { first: 1, second: 2, }

// Next lines will fail to compile:
//log2({});
//log2({ first: 1 });
//log2({ second: 2 });

export {};
