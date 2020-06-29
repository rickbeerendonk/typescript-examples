/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function test1(val: number | undefined): void {
  console.log(val);
}

function test2(val?: number): void {
  console.log(val);
}

// Doesn't compile
//test1();
test2();

export {};
