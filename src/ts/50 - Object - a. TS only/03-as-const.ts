/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

const o1 = {
  prop1: true,
  prop2: 2
};

o1.prop1 = false;
o1.prop2 = 22;

console.log(JSON.stringify(o1)); // {"prop1":false,"prop2":22}

const o2 = {
  prop1: true,
  prop2: 2
} as const;

// Doesn't compile
//o2.prop1 = false;
//o2.prop2 = 22;

console.log(JSON.stringify(o2)); // {"prop1":true,"prop2":2}

export {};
