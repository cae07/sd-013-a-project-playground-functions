// Desafio 10
function techList(arrayNomes, name) {
  let arrayCompleto = [];
  let arrayCompletoSort = arrayNomes.sort();
  if (arrayNomes.length === 0) return 'Vazio!';
  arrayCompletoSort.forEach((nomeCorrente) => {
    const objeto = {
      tech: nomeCorrente,
      name,
    };
    arrayCompleto.push(objeto);
  });
  return arrayCompleto;
}
console.log(techList([], 'yuri'));

// Desafio 11
function generatePhoneNumber() {
//   if (arrayNumbers.length >= 12) return 'Array com tamanho incorreto.';
//   let parentesis = arrayNumbers.slice(0, 2).join('');
//   let primeiroBloco = arrayNumbers.slice(2, 7).join('');
//   let ultimoBloco = arrayNumbers.slice(7, 11).join('');
//   let number = '('.concat(parentesis, ') ', primeiroBloco, '-', ultimoBloco);
//   let arrayPadrão = arrayNumbers;
//   let mensagem = '';
//   mensagem = number;
//   let numeroRepete = 0;
//   if (numeroRepete === 2) mensagem = 'não é possível gerar um número de telefone com esses valores';
//   arrayPadrão.forEach((cadaNumero) => {
//     if (cadaNumero < 0) mensagem = 'não é possível gerar um número de telefone com esses valores';
//     arrayPadrão.forEach((numeros) => {
//       if (numeros === cadaNumero) numeroRepete += 1;
//     });
//   });
//   return mensagem;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
