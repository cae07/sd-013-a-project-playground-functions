// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let crescente = array.sort();
  let conjunto = [];
  for (let index = 0; index < array.length; index +=1) {
    conjunto[index] = {
        tech: crescente[index],
        name: name
    };
  }
  return conjunto;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneNumber.length; index +=1) {
    if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index1 = 0; index1 < phoneNumber.length; index1 +=1) {
    let contador = 0;
    for (let index2 = 0; index2 < phoneNumber.length; index2 +=1) {
      if (phoneNumber[index1] === phoneNumber[index2]) {
        contador +=1;
      }
    }
    if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`
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
