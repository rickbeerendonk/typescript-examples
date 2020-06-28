/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type Option = 'One' | 'Three' | 'Five';

let option: Option;

option = 'One';
console.log(option); // One

option = 'Five';
console.log(option); // Five

// Next lines will fail to compile:
// option = 'one';
// option = 'Two';
// option = null;

export {};
