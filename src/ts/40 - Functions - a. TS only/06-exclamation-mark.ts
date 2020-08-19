/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

async function test(): Promise<number> {
  let result: number;

  async function getResult() {
    result = 123;
  }

  await getResult();

  // Use ! to prevent error "Variable 'result' is used before being assigned"
  return result!;
}

export {};
