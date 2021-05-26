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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineB + lineA)) {
    return false;
  };
  if ((lineA < Math.abs(lineB - lineC)) || (lineB < Math.abs(lineA - lineC)) || (lineC < Math.abs(lineB - lineA))) {
    return false;
  };
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true
  } else if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - LineC))) {
    return true;
  } else if ((lineC < lineB + lineA) && (liceC > Math.abs(lineA - lineB))) {
    return true;
  } else {
    return false;
  };
};
console.log(Math.abs(-50));

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
