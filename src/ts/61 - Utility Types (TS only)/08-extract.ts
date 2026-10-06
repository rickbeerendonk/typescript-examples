/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

type Direction = 'north' | 'east' | 'south' | 'west';
type VerticalDirection = Extract<Direction, 'north' | 'south' | 'up' | 'down'>;

const direction: VerticalDirection = 'north';

console.log(direction);

// The next lines will fail to compile:
//const horizontalDirection: VerticalDirection = 'east';
//const horizontalDirection: VerticalDirection = 'west';
//const upDirection: VerticalDirection = 'up';
//const downDirection: VerticalDirection = 'down';

export {};
