/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface Intf {
  prop1: string;
  prop2: string;
  prop3: boolean;
  prop4: number;
}

type K1 = keyof Intf;

const key: K1 = 'prop1'; // Or: 'prop2', 'prop3', 'prop4'

console.log(key);

export {};
