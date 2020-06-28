/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

class MyClass2 {
  private priv = 'private';
  protected prot = 'protected';
  public publ = 'public';

  showValues() {
    console.log(this.priv);
    console.log(this.prot);
    console.log(this.publ);
  }
}

class MyClass3 extends MyClass2 {
  showValues() {
    // Following line doesn't compile
    // console.log(this.priv);
    console.log(this.prot);
    console.log(this.publ);
  }
}

const myObj2 = new MyClass2();
myObj2.showValues();

const myObj3 = new MyClass3();
myObj3.showValues();

// Following lines don't compile
// console.log(myObj2.priv);
// console.log(myObj2.prot);
console.log(myObj2.publ);
