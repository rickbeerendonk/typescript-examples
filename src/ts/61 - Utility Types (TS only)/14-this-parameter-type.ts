/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

function getName(this: { name: string }) {
  return this.name;
}

type NameReceiver = ThisParameterType<typeof getName>;

const receiver: NameReceiver = { name: 'Alexandra' };

console.log(getName.call(receiver));

export {};
