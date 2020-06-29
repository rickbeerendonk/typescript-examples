/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type Nullable<T> = { [P in keyof T]: T[P] | null };

interface Intf1 {
  first: number;
  second: number;
}

// Nullable will mark all the fields as "nullable"
function log2(value: Nullable<Intf1>) {
  console.log(value);
}

log2({ first: null, second: null });
log2({ first: null, second: 2 });
log2({ first: 1, second: 2 });

export {};
