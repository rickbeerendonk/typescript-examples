/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = { name: 'Alexandra', age: 34 };

console.log(user.name, user.age);

// The next lines will fail to compile:
//user.age = 35;
//user.name = 'Benjamin';

export {};
