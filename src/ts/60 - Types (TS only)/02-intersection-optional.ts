/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type First = {
  same1: string;
  same2?: string;
  unique1: number;
};

type Second = {
  same1?: string;
  same2?: string;
  unique2: number;
};

type Intersection = First & Second;

const intersection: Intersection = {
  same1: 'intersection',
  unique1: 1,
  unique2: 2
};

console.log(intersection);
// { same: 'intersection', unique1: 1, unique2: 2 }

export {};
