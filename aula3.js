const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n vezes
// + (obrigatório) 1 ou n vezes (tem de existir para funcionar corretamente)
// ? (opcionais) 0 ou 1
// \ (Serve para escapar de caracteres específicos)

// {n, m} (Declarar a quantidade de vezes que vai aparecer e reclarar a quantidade de vezes no máximo que vai aparecer)
// {10,} no minimo 10
// {, 10} de 0 a 10
// {5, 10} de 5 a 10

const regExp1 = /Jo+ão+/gi;

// console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2)

  // if (!valido) continue;

  console.log(arquivo, valido);
}