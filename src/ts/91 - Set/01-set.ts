/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

function logIterator(
  iterator: IterableIterator<string> | IterableIterator<[string, string]>
) {
  let s = '';
  for (const v of iterator) {
    s += v.toString() + '; ';
  }
  console.log(s);
}

const s = new Set(['A', 'B']);
s.add('C');
s.add('D');

logIterator(s.keys()); // A; B; C; D
logIterator(s.values()); // A; B; C; D
logIterator(s.entries()); // A,A; B,B; C,C; D,D

console.log('');
console.log(s.has('A')); // true
console.log(s.size); // 4

s.delete('A');
console.log(s.has('A')); // false
console.log(s.size); // 3

s.clear();
console.log(s.size); // 0

export {};
