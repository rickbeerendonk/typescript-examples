/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

const date = new Date();
const time = date.getHours();

if (time < 12) {
  console.log('Good morning');
}

console.log('Welcome!');

export {};
