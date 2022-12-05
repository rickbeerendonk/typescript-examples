/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

interface IMyFunc {
  (name: string, value: number): string;
}

const myFunc: IMyFunc = (name: string, value: number): string =>
  name + value.toString();

// Doesn't compile:
//let myFunc2: IMyFunc = (name: string, value: string) => name + value;

console.log(myFunc('Text', 123)); // Text123

export {};
