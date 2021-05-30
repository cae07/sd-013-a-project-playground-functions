// Desafio 10
function techList(arrayTecnologia, name) {
  if (arrayTecnologia.length === 0) {
    return 'Vazio!';
  }
  let tecnologiaArray = [];
  for (let tecnologia of arrayTecnologia) {
    tecnologiaArray.push({
      tech: tecnologia,
      name,
    });
  }
  tecnologiaArray.sort(function compare(a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    return 1;
  });
  return tecnologiaArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // SOBRE CONTADOR E FOR OBTIVE AJUDA DOS COLEGAS JOSUE LOBO, GREG E GABRIEL GASPAR.
  for (let i = 0; i < array.length; i += 1) {
    let contator = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] < 0 || array[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (array[i] === array[j]) {
        contator += 1;
      }
    }
    if (contator >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroDeTelefone = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return numeroDeTelefone;
}
console.log(generatePhoneNumber([1, 2, 3, 2, 5, 6, 7, 2, 9, 0, 1]));
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
