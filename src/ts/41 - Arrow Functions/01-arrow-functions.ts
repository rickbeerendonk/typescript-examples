/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

const a = () => 'EcmaScript';

const b = (x: number) => x * x;
const c = (x: number) => x * x; // Omit ()
const d = (x: number) => {
  const y = x * x;
  return y;
}; // Add { ...; return ...; }

const e = (x: number, y: number) => x * y;

console.log(a()); // EcmaScript
console.log(b(2)); // 4
console.log(c(3)); // 9
console.log(d(4)); // 16
console.log(e(5, 6)); // 30

export {};
