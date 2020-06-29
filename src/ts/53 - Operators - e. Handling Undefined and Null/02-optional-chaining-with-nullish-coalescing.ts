/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// ES 2020

type User = {
  address?: {
    street: string;
  };
};

const user: User = {
  address: undefined
};

// Would throw without ?.
console.log(
  'user.address.street or alternative:',
  JSON.stringify(user.address?.street ?? 'unknown')
);

// user.address.street or alternative: unknown

export {};
