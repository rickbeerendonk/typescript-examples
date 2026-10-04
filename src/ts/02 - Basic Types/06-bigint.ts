/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// ES 2020
// TS 3.2

// https://github.com/tc39/proposal-bigint

console.log('Max. int:', Number.MAX_SAFE_INTEGER);
console.log(
  'BigInt: ',
  9007199254740992n + BigInt(9007199254740992) /* short + long notation */
);

// 9007199254740991
// 18014398509481984n
