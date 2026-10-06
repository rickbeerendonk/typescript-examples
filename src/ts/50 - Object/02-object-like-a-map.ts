/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

type MapValue = boolean | number | string;
type ObjectMap = Record<string, MapValue>;

const objectMap: ObjectMap = {};

objectMap['prop1'] = true;
objectMap['prop2'] = 2;
objectMap['prop3'] = 'three';

console.log(JSON.stringify(objectMap)); // {"prop1":true,"prop2":2,"prop3":"three"}

delete objectMap['prop2'];

console.log(JSON.stringify(objectMap)); // {"prop1":true,"prop3":"three"}

export {};
