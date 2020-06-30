/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// Alias: New name for existing type.

type Text = string;
type TextFunc = () => string;
type TextOrTextFunc = Text | TextFunc;

function getText(val: TextOrTextFunc): string {
  if (typeof val === 'string') {
    return val;
  } else {
    return val();
  }
}

console.log(getText('test')); // test

export {};
