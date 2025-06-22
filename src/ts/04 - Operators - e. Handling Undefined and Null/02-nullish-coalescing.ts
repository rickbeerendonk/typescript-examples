/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// ES 2020

// https://github.com/tc39/proposal-nullish-coalescing

let value: undefined | null | string | number | boolean;

value = undefined;
console.log('undefined:', value ?? 'other');

value = null;
console.log('null:', value ?? 'other');

value = '';
console.log('"":', value ?? 'other');

value = 0;
console.log('0:', value ?? 'other');

value = false;
console.log('false:', value ?? 'other');

// undefined: other
// null: other
// "":
// 0: 0
// false: false

export {};
