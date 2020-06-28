/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

type Obj = {
  prop1?: boolean;
  prop2?: number;
  prop3?: string;
};

const o: Obj = new Object();

o.prop1 = true;
o.prop2 = 2;
o.prop3 = 'three';

console.log(JSON.stringify(o)); // {"prop1":true,"prop2":2,"prop3":"three"}

delete o.prop2;

console.log(JSON.stringify(o)); // {"prop1":true,"prop3":"three"}

export {};
