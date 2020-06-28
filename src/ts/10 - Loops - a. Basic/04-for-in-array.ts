/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint @typescript-eslint/no-array-constructor: 1 */
/* eslint @typescript-eslint/no-for-in-array: 1 */

const players = new Array();
players[0] = 'Rafael Nadal';
players[2] = 'Roger Federer';
players[5] = 'Serena Williams';

console.log(JSON.stringify(players));

for (const index in players) {
  console.log('Tennis player:', players[index]);
}

export {};
