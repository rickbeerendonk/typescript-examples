/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint-disable prefer-const */

type First = {
  same: string;
  unique1: number;
};

type Second = {
  same: string;
  unique2: number;
};

type Union = First | Second;

let value: Union;

value = { same: 'Same', unique2: 2 };
value = { same: 'Same', unique1: 1 };

console.log(value);
console.log('unique2' in value);

export {};
