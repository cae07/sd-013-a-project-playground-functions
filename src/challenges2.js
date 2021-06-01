// Desafio 10

// let objectArray = [];

// for (let key of techs) {
//   objectArray.push({
//     tech: key,
//     name: name,
//   });
// }

function techList(techs, nome) {
  if (techs.length === 0) {
    let resultado = 'Vazio!';
    return resultado;
  }

  techs.sort();
  let objectArray = [];

  for (let index = 0; index < techs.length; index += 1) {
    objectArray.push({
      tech: techs[index],
      name: nome,
    });
  }

  return objectArray;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let resultado;

  if (phoneNumber.length !== 11) {
    resultado = "Array com tamanho incorreto.";
    return resultado;
  } else {
    for (let index = 0; index < phoneNumber.length; index += 1) {
      if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
        resultado = "não é possível gerar um número de telefone com esses valores";
        return resultado;
      }
    }

    for (let index = 0; index < phoneNumber.length; index += 1) {
      let count = 0;
      for (let i = 0; i < phoneNumber.length; i += 1) {
        if (phoneNumber[i] === phoneNumber[index]) {
          count += 1;
          if (count >= 3) {
            resultado = "não é possível gerar um número de telefone com esses valores";
            return resultado;
          }
        }
      }
    }

    let newNumber = phoneNumber.join('');
    resultado = `(${newNumber.substring(0, 2)}) ${newNumber.substring(2, 7)}-${newNumber.substring(7, 11)}`;
    return resultado;
  }
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
