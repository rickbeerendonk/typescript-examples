/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf3 {
  first: number;
  second?: number;
}

// Required will mark all the fields as required
function log3(value: Required<Intf3>) {
  console.log(value);
}

log3({ first: 1, second: 2 }); // { first: 1, second: 2, }

// Next line will fail to compile:
//log({});
//log({ first: 1 });
//log({ second: 2 });

export {};
