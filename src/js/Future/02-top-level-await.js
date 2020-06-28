/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// ES Stage 3

// https://github.com/tc39/proposal-top-level-await

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const posts = await response.json();

console.log(posts);
