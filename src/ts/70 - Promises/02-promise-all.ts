/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

const p1 = (): Promise<string> =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Resolved 1'), 2000);
  });
const p2 = (): Promise<string> =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Resolved 2'), 1000);
  });
/*
const p3 = (): Promise<string> => new Promise(function(resolve, reject) { 
		setTimeout(() => reject('Rejected 3'), 1500); 
	});
*/

Promise.all([p1(), p2() /*, p3() */])
  .then((arr) => console.log('Success:', JSON.stringify(arr)))
  .catch((err) => console.log('Fail:', err));

console.log('End of file...');

export {};
