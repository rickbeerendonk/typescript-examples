/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

class MyClass4 {
  private _name = 'My Class 4';

  get name() {
    console.log('get name: ' + this._name);
    return this._name;
  }
  set name(value: string) {
    console.log('set name: ' + value);
    this._name = value;
  }
}

const myObj4 = new MyClass4();

const oldValue = myObj4.name;
myObj4.name = oldValue + ' is changed';
const newValue = myObj4.name;
console.log('newValue:', newValue);
