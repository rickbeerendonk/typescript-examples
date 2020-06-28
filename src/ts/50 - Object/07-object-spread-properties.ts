/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

// ES 2018

const name = 'EcmaScript';
const obj = {
  year: 2018,
  final: true
};

const composed = { name, ...obj };

console.log(composed); // { name: "EcmaScript", year: 2018, final: true }

export {};
