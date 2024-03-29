/*
  ! Tags

 ? g - global (encontra todas as ocorrências) 
 ? i - insensitive (encontra ocorrência que seja minuscula ou maiuscula)
 ? () - (Serve para separar grupos)
 ? | - (Ou)
 */
const { texto } = require('./base');

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
