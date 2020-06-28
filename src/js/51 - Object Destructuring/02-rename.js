/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

let obj = {
  committee: 'TC39',
  name: 'EcmaScript',
  edition: { version: 6, year: 2015 },
  website: 'https://github.com/tc39'
};

let { committee, name: officialName } = obj;

console.log(committee); // 'TC39'
console.log(officialName); // 'EcmaScript'
