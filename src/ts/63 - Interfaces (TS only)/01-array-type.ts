interface IStringArray {
  [index: number]: string;
  length: number;
}

const cities: IStringArray = ['London', 'Paris', 'Amsterdam'];
console.log(cities[0]);
console.log(cities.length);

///////

interface IStringDictionary {
  [index: string]: string;
}

const capitalCities: IStringDictionary = {};

capitalCities['UK'] = 'London';
capitalCities['France'] = 'Paris';
capitalCities['The Netherlands'] = 'Amsterdam';

console.log(capitalCities['France']);
console.log(JSON.stringify(capitalCities));

export {};
