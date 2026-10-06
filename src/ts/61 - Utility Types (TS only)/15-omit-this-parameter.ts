/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

interface Person {
  firstName: string;
  lastName: string;
}

function fullName(this: Person, separator: string) {
  return `${this.firstName}${separator}${this.lastName}`;
}

type FullNameFormatter = OmitThisParameter<typeof fullName>;

const formatFullName: FullNameFormatter = fullName.bind({
  firstName: 'Alexandra',
  lastName: 'Smith'
});

console.log(formatFullName(' '));

export {};
