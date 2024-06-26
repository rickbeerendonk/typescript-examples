/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

// ES 2020

const p1 = () =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Resolved 1'), 2000);
  });
const p2 = () =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Resolved 2'), 1000);
  });
const p3 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => reject('Rejected 3'), 1500);
  });

Promise.allSettled([p1(), p2(), p3()])
  .then((arr) => console.log('Success:', JSON.stringify(arr)))
  .catch((err) => console.log('Fail:', err));

console.log('End of file...');
