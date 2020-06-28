/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// ES 2020

const user = {
  address: null
};

// Would throw without ?.
console.log(
  'user.address.street or alternative:',
  JSON.stringify(user.address?.street ?? 'unknown')
);

// user.address.street or alternative: unknown
