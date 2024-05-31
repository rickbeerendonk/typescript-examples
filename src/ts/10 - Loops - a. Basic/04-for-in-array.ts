/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint @typescript-eslint/no-for-in-array: 0 */

const players = [];
players[0] = 'Rafael Nadal';
players[2] = 'Roger Federer';
players[5] = 'Serena Williams';

console.log(JSON.stringify(players));

for (const index in players) {
  console.log('Tennis player:', players[index]);
}

export {};
