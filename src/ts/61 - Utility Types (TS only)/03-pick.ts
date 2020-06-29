/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf {
  prop1: string;
  prop2: string;
  prop3: boolean;
  prop4: number;
}

type IntfPart = Pick<Intf, 'prop3' | 'prop4'>;

const obj: IntfPart = {
  // prop1: "Doesn't work",
  // prop2: "Doesn't work",
  prop3: true,
  prop4: 444
};

console.log(obj);

export {};
