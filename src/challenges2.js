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
function finalNumber(arrayPhoneNumber) {
  let phoneNumber = '';
  for (const element of arrayPhoneNumber) {
    phoneNumber += element;
  }
  let phoneComplete = phoneNumber.slice(0, 2);
  phoneComplete = `(${phoneComplete}) `;
  phoneComplete += phoneNumber.slice(2, 7);
  phoneComplete = `${phoneComplete}-`;
  phoneComplete += phoneNumber.slice(7, 11);
  return phoneComplete;
}

function lessThanThree(i, arrayPhoneNumber, countTimes) {
  for (let i2 of arrayPhoneNumber) {
    if (i === i2) {
      countTimes += 1;
    }
  }
  return countTimes;
}

function validateEqualNumbers(arrayPhoneNumber, countTimes) {
  for (let i of arrayPhoneNumber) {
    countTimes = lessThanThree(i, arrayPhoneNumber, countTimes);
    if (countTimes >= 3) {
      return true;
    }
    countTimes = 0;
  }
}

function validatingNumber(arrayPhoneNumber) {
  let confirm = false;
  let countTimes = 0;
  for (let i of arrayPhoneNumber) {
    confirm = validateEqualNumbers(arrayPhoneNumber, countTimes);
    if (confirm === true || (i > 9) || (i < 0)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    countTimes = 0;
  }
}

function generatePhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let valid = validatingNumber(arrayPhoneNumber);
  if (valid === 'não é possível gerar um número de telefone com esses valores') {
    return validatingNumber(arrayPhoneNumber);
  }
  return finalNumber(arrayPhoneNumber);
}

// Desafio 12

function checkOne(lineA, lineB, lineC) {
  if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineB + lineA)) {
    return false;
  }
}

function checkTwo(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    return true;
  }
}

function checkThree(lineA, lineB, lineC) {
  let lineAbsoAC = Math.abs(lineA - lineC);
  if (lineA < Math.abs(lineB - lineC) || lineB < lineAbsoAC || lineC < Math.abs(lineB - lineA)) {
    return false;
  }
}

function checkFour(lineA, lineB, lineC) {
  if ((lineC < lineB + lineA) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  let bool = false;
  bool = checkOne(lineA, lineB, lineC);
  if (bool === true) {
    return true;
  }
  bool = checkTwo(lineA, lineB, lineC);
  if (bool === true) {
    return true;
  }
  bool = checkThree(lineA, lineB, lineC);
  if (bool === false) {
    return false;
  }
  bool = checkFour(lineA, lineB, lineC);
  if (bool === true) {
    return true;
  }
  return false;
}

// Desafio 13

function hydratreResult(quantidade) {
  if (quantidade === 1) {
    return `${quantidade} copo de água`;
  }
  return `${quantidade} copos de água`;
}

function increaseQuantidade(stringBeverages, i2String, quantidade, i2) {
  for (let i = 0; i < stringBeverages.length; i += 1) {
    if (stringBeverages[i] === i2String) {
      quantidade += i2;
    }
  }
  return quantidade;
}

function hydrate(stringBeverages) {
  let quantidade = 0;
  for (let i2 = 0; i2 < stringBeverages.length; i2 += 1) {
    let i2String = i2.toString();
    quantidade = increaseQuantidade(stringBeverages, i2String, quantidade, i2);
  }
  return hydratreResult(quantidade);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
