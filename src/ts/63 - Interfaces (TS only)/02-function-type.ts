/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

interface IMyFunc {
  (name: string, value: number): string;
}

const myFunc: IMyFunc = function (name: string, value: number) {
  return name + value.toString();
};

// Doesn't compile:
// let myFunc2: IMyFunc = function(name: string, value: string) {
//     return name + value;
// }

console.log(myFunc('Text', 123)); // Text123

export {};
