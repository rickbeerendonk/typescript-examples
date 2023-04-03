/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint-disable no-case-declarations */

enum Color {
  R,
  G,
  B
  //Y
}

const colorName = (color: Color): string => {
  switch (color) {
    case Color.R:
      return 'Red';
    case Color.G:
      return 'Green';
    case Color.B:
      return 'Blue';
    default:
      const _exhaustiveCheck: never = color;
      return _exhaustiveCheck;
  }
};

export {};
