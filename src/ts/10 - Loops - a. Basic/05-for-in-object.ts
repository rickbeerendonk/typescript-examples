/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

type Town = {
  name: string;
  age: number;
  country: string;
  [index: string]: number | string;
};

const town: Town = {
  name: 'Hillegom',
  age: 1000,
  country: 'The Netherlands'
};

for (const prop in town) {
  console.log(prop + ':', town[prop]);
}

export {};
