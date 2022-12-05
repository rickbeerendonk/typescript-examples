/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-optional-chaining

type User = {
  address: null | {
    street: string;
  };
};

const user: User = {
  address: null
};

console.log('user:', JSON.stringify(user));
console.log('user.address:', JSON.stringify(user.address));

// Would throw without ?.
console.log('user.address.street:', JSON.stringify(user.address?.street));

// user: {"address": null}
// user.address: null
// user.address.street: undefined
