interface IStringArray {
  [index: number]: string;
}

const cities: IStringArray = ['London', 'Paris', 'Amsterdam'];
console.log(cities[0]);

///////

interface IStringDictionary {
  [index: string]: string;
}

const capitalCities: IStringDictionary = {};

capitalCities['UK'] = 'London';
capitalCities['France'] = 'Paris';
capitalCities['The Netherlands'] = 'Amsterdam';

console.log(capitalCities['France']);

export {};
