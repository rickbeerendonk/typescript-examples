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

function func(): First | Second {
  return { same: 'same', unique1: 1, unique2: 2 };
}

console.log(func().same);

// Don't compile:
// console.log(func().unique1);
// console.log(func().unique2);

export {};
