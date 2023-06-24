const { alfabeto } = require('./base');

// ? Conjuntos
// [abc] -> Conjunto
// [^] -> Negação

// ? Range
// [0-9]

// console.log(alfabeto.match(/[0-9]+/g));
// console.log(alfabeto.match(/[a-z]+/g));
// console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/\w+/g)); // (\w) atalho para fazer a mesma coisa de [a-zA-Z0-9_]
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); //Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); //Unicode

// Pode ver mais atalhos em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet