/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// ES 2020
// TS 3.7

// https://github.com/tc39/proposal-optional-chaining

type User = {
  address?: {
    street: string;
  };
};

const user: User = {
  address: undefined
};

console.log('user:', JSON.stringify(user));
console.log('user.address:', JSON.stringify(user.address));

// Would throw without ?.
console.log('user.address.street:', JSON.stringify(user.address?.street));

// user: {"address": null}
// user.address: null
// user.address.street: undefined

export {};
