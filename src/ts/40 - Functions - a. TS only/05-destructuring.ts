/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

type Tuple = [string, number?, ...boolean[]];

function foo(...args: Tuple): void {
  console.log(args);
}

const tuple1: Tuple = ['a'];
const tuple2: Tuple = ['a', 1, false];
const tuple3: Tuple = ['a', 1, false, true, false];

foo(...tuple1);
foo(...tuple2);
foo(...tuple3);

export {};
