const { cpfs, cpfs2 } = require('./base');

// ^ - Começa com
// $ - Termina com
// [^] - Negação
// m - multiline

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs2.match(cpfRegExp)); // Com multiline, ele consegue achar os CPFs porque ele lê por linha e não se importa como está escrito na totalidade
// console.log(cpfs.match(cpfRegExp));