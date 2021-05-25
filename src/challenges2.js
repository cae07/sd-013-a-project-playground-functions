// Desafio 10
function techList(techNamesArray, name) {
  if (techNamesArray.length === 0) {
    return 'Vazio!';
  }

  let arrayOrdenada = techNamesArray.sort();
  let saida = [];

  for (let i in arrayOrdenada) {
    saida.push({tech: arrayOrdenada[i], name: name})
  }

  return saida;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i in phoneNumber) {
    if (phoneNumber[i] < 0 || phoneNumber[i] > 9 || (phoneNumber.filter(x => x === phoneNumber[i]).length) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let numero = '';

  for (let j in phoneNumber) {
    if (j == 0) {
      numero += `(${phoneNumber[j]}`;
    } else if (j == 1) {
      numero += `${phoneNumber[j]}) `;
    } else if (j == 6) {
      numero += `${phoneNumber[j]}-`;
    } else {
      numero += phoneNumber[j];
    }
  }

  return numero;
}

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
