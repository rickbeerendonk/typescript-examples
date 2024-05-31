/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

const p1 = (): Promise<string> =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Server result'), 4000);
  });
const p2 = (): Promise<string> =>
  new Promise(function (resolve) {
    setTimeout(() => resolve('Cache result'), 2000);
  });
//const p3 = (): Promise<string> => new Promise(function(resolve, reject) {
//		setTimeout(() => reject('Timeout'), 1500);
//	});

const p1return = p1();

Promise.race([p1return, p2() /*, p3() */])
  .then((text) =>
    console.log(
      'Update user interface with result from either server or cache:',
      JSON.stringify(text)
    )
  )
  .catch((err) => console.log('Fail:', err));

void p1return.then((text) =>
  console.log('Update cache with server result:', text)
);

console.log('End of file...');

export {};
