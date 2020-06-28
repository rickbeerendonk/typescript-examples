/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type First = {
  same: string;
  unique1: number;
};

type Second = {
  same: string;
  unique2: number;
};

type Intersection = First & Second;

const intersection: Intersection = {
  same: 'intersection',
  unique1: 1,
  unique2: 2
};

console.log(intersection);
// { same: 'intersection', unique1: 1, unique2: 2 }
