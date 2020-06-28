/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const o: {
  prop1: boolean;
  prop2?: number;
  prop3: string;
  prop4?: number;
} = {
  prop1: true,
  prop2: 2,
  prop3: 'three'
};

console.log(JSON.stringify(o)); // {"prop1":true,"prop2":2,"prop3":"three"}

Object.freeze(o);

// No changes possible
o.prop3 = 'THIRD';
delete o.prop2;
o.prop4 = 444;

console.log(JSON.stringify(o)); // {"prop1":true,"prop3":"three"}

export {};
