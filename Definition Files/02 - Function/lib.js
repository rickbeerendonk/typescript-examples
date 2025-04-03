/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export function noparamnoreturn() {
  console.log('No parameters, no return value');
}

export function oneparamnoreturn(value) {
  console.log('One parameter, no return value');
}

export function oneparamreturn(value) {
  return value;
}
