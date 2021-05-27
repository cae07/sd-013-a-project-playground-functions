// Desafio 10
function techList(arrayTech, personName) {
  arrayTech.sort();
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayTech.length; i += 1) {
    arrayTech[i] = {
      tech: arrayTech[i], name: personName,
    };
  }
  return (arrayTech);
}

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let countTimes = 0;
  for (let i = 0; i < arrayPhoneNumber.length; i += 1) {
    for (let i2 = 0; i2 < arrayPhoneNumber.length; i2 += 1) {
      if (arrayPhoneNumber[i] === arrayPhoneNumber[i2]) {
        countTimes += 1;
      }
    }
    if ((countTimes >= 3) || (arrayPhoneNumber[i] > 9) || (arrayPhoneNumber[i] < 0)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    countTimes = 0;
  }
  let phoneNumber = '';
  for (let i3 = 0; i3 < arrayPhoneNumber.length; i3 += 1) {
    if (phoneNumber.length === 0) {
      phoneNumber += '(';
    }
    if (phoneNumber.length === 3) {
      phoneNumber += ')';
    }
    if (phoneNumber.length === 4) {
      phoneNumber += ' ';
    }
    if (phoneNumber.length === 10) {
      phoneNumber += '-';
    }
    phoneNumber += arrayPhoneNumber[i3];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineB + lineA)) {
    return false;
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  }
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    return true;
  }
  if ((lineC < lineB + lineA) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(stringBeverages) {
  let quantidade = 0;
  for (let i2 = 0; i2 < stringBeverages.length; i2 += 1) {
    let i2String = i2.toString();
    for (let i = 0; i < stringBeverages.length; i += 1) {
      if (stringBeverages[i] === i2String) {
        quantidade += i2;
      }
    }
  }
  if (quantidade === 1) {
    return `${quantidade} copo de água`;
  }
  return `${quantidade} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
