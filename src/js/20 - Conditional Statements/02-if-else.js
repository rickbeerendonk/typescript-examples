/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

let date = new Date();
let time = date.getHours();

if (time < 12) {
  console.log('Good morning');
} else {
  console.log('Good day');
}

console.log('Welcome!');
