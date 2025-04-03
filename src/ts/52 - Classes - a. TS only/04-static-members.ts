/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

class MyClass6 {
  public static staticField = 'Only accessable through class';
  public static staticMethod(): string {
    return 'Only accessable through class';
  }
}

console.log(MyClass6.staticField); // Only accessable through class
console.log(MyClass6.staticMethod()); // Only accessable through class
