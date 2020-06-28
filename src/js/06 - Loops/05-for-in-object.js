/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

let town = {
  name: 'Hillegom',
  age: 1000,
  country: 'The Netherlands'
};

for (let prop in town) {
  console.log(prop + ': ', town[prop]);
}
