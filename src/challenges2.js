// Desafio 10
// Ajudado por Ricardo Souza Turma 13 A
function techList(tech, name) {
  let menor = tech.sort();
  let array = [];
  for (let index = 0; index < menor.length; index += 1) {
    array.push({
      tech: menor[index],
      name: name,
    });
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return array;
}

// Desafio 11 - Ajudado pela Bianca no plantão da manhã e pelo Sumo a noite
function generatePhoneNumber(numeros) {
  let contagem = 0;
  //  verifica se o array é igual 11
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // verifica se existe numeros < 0 ou > 9
  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (index = 0; index < numeros.length; index += 1) {
    for (counter = 0; counter < numeros.length; counter += 1) {
      if (numeros[index] === numeros[counter]) {
        contagem += 1;
      }
      if (contagem > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    contagem = 0;
  }

  for (index = 0; index < numeros.length; index += 1) {
  }
  let numPronto = '(' + numeros[0] + numeros[1] + ') ' + numeros[2] + numeros[3] 
  + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9]
  + numeros[10];
  return numPronto;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
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
