/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* oxlint-disable no-unreachable */

try {
  console.log('before error');
  throw new Error('Something went wrong');
  console.log('after error');
} catch (err) {
  console.log('There was an error:', err);
} finally {
  console.log('after error & always executed');
}

export {};
