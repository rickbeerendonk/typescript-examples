/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

import { square } from './02-named-indirect-export';

console.log(square(3)); // 9

// TS: Doesn't compile
// console.log(cube(3)); // JS: ReferenceError
