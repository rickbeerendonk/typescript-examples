/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

type Direction = 'north' | 'east' | 'south' | 'west';
type HorizontalDirection = Exclude<Direction, 'north' | 'south'>;

const direction: HorizontalDirection = 'east';

console.log(direction);

// The next lines will fail to compile:
//const verticalDirection1: HorizontalDirection = 'north';
//const verticalDirection2: HorizontalDirection = 'south';

export {};
