/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function test(...args: [TemplateStringsArray, boolean, number, string]) {
  console.log(...args); // [ 'Boolean ', ' Number ', ' String ', '' ] false 123 text
}

test`Boolean ${false} Number ${123} String ${'text'}`;

export {};
