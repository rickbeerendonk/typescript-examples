/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

type MaybeName = string | null | undefined;
type Name = NonNullable<MaybeName>;

const name: Name = 'Alexandra';

console.log(name);

// The next lines will fail to compile:
//const missingName: Name = null;
//const undefinedName: Name = undefined;

export {};
