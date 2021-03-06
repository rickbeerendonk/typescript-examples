/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

const obj = {
  committee: 'TC39',
  name: 'EcmaScript',
  edition: { version: 6, year: 2015 },
  website: 'https://github.com/tc39'
};

const { committee, name: officialName } = obj;

console.log(committee); // 'TC39'
console.log(officialName); // 'EcmaScript'
console.log(name); // '' // because undefined

export {};
