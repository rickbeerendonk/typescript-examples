/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

'use strict';

const p1 = () =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Resolved 1'), 3000);
  });
const p2 = () =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Resolved 2'), 2000);
  });
const p3 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => reject('Rejected 3'), 1000);
  });

Promise.any([p1(), p2(), p3()])
  .then((arr) => console.log(`Success: ${JSON.stringify(arr)}`))
  .catch((err) => console.log(`Fail: ${err}`));

console.log('End of file...');
