/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

// ES 2020

const language = 'en';

let lib;
switch (language) {
  case 'es': {
    lib = './01-2-dynamic-import-named_es.js';
    break;
  }
  default: {
    lib = './01-2-dynamic-import-named_en.js';
  }
}

import(lib)
  .then((module) => console.log(module.greeting()))
  .catch((error) => console.log(error));
