let array = Array.from({ length: 100000 }, () => Math.random());

let start = Date.now();

array.sort();

let end = Date.now();

console.log('Sortiranje je trajalo', end - start, 'ms');