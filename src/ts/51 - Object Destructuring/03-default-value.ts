/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

const obj: {
  committee: string;
  name: string;
  edition: { version: number; year: number };
  website: string;
  other?: string;
} = {
  committee: 'TC39',
  name: 'EcmaScript',
  edition: { version: 6, year: 2015 },
  website: 'https://github.com/tc39'
};

const { committee = 'TC40', other = 'new' } = obj;

console.log(committee); // 'TC39'
console.log(other); // 'new'

export {};
