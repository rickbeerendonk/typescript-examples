/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-array-constructor */
/* eslint-disable @typescript-eslint/no-for-in-array */

let players = new Array();
players[0] = 'Rafael Nadal';
players[2] = 'Roger Federer';
players[5] = 'Serena Williams';

console.log(JSON.stringify(players));

for (let index in players) {
  console.log('Tennis player:', players[index]);
}
