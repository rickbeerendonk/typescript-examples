/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// Map the properties of a type to another type.

interface TownInfo {
  name: string;
}

type Town = 'home' | 'work' | 'leisure';

const x: Record<Town, TownInfo> = {
  home: { name: 'Lisse' },
  work: { name: 'Oslo' },
  leisure: { name: 'Hillegom' }
};

console.log(x);

export {};
