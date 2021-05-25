// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort();
  for (let i = 0; i < arrayTech.length; i += 1) {
    arrayTech[i] = {
      tech: arrayTech[i],
      name: name
    }
  }

  if (arrayTech == "") {
    return 'Vazio!'
  } else {
    return (arrayTech);
  }
}

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  };
  let countTimes = 0;
  for (let i = 0; i < arrayPhoneNumber.length; i += 1) {
    for (let i2 = 0; i2 < arrayPhoneNumber.length; i2 += 1) {
      if (arrayPhoneNumber[i] == arrayPhoneNumber[i2]) {
        countTimes += 1;
      }
    }
    if ((countTimes >= 3) || (arrayPhoneNumber[i] > 9) || (arrayPhoneNumber[i] < 0)) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    countTimes = 0;
  }
  let phoneNumber = "";
  for (let i3 = 0; i3 < arrayPhoneNumber.length; i3 += 1) {
    if (phoneNumber.length == 0) {
      phoneNumber += "(";
    }
    if (phoneNumber.length == 3) {
      phoneNumber += ")";
    }
    if (phoneNumber.length == 4) {
      phoneNumber += " ";
    }
    if (phoneNumber.length == 10) {
      phoneNumber += "-";
    }

    phoneNumber += arrayPhoneNumber[i3];

  }
  return phoneNumber;

}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, -9, 0, 1]));

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
