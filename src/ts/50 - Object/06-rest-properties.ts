/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

// ES 2018

const obj = {
  name: 'EcmaScript',
  year: 2018,
  final: true
};

const { name, ...other } = obj;

console.log(name); // EcmaScript
console.log(other); // { year: 2018, final: true }

export {};
