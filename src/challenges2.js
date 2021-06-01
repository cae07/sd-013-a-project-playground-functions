// Desafio 10
function isEmptyArray(array) {
  let verificator = 0;
  let emptyArray = false;

  for (let value of array) {
    if (value === '') {
      verificator += 1;
    }
  }
  if (verificator === array.length) {
    emptyArray = true;
  }

  return emptyArray;
}

function techList(arrayOfItems, name) {
  arrayOfItems.sort();
  let arrayOfObjects = [];
  let emptyArray = isEmptyArray(arrayOfItems);
  let result;
  if (emptyArray) {
    result = 'Vazio!';
  } else {
    for (let value of arrayOfItems) {
      let listTech = {
        tech: value,
        name,
      };
      arrayOfObjects.push(listTech);
    }
    result = arrayOfObjects;
  }

  return result;
}

// Desafio 11
function isDifferentThan11(array) {
  let result = false;
  let isDifferent = (array.length !== 11);

  if (isDifferent) {
    result = true;
  }

  return result;
}

function isValidNumber(array) {
  let result = true;

  for (let value of array) {
    let condition = ((value < 0) || (value > 9));
    if (condition) {
      result = false;
      break;
    }
  }

  return result;
}

function comparateNumber(array, value) {
  let counter = 0;

  for (let index = 1; index < array.length; index += 1) {
    // console.log(`valor ${value} sendo comparado com ${array[index]}`);
    if (value === array[index]) {
      counter += 1;
    }
  }

  return counter;
}

function isRepeatedNumber(array) {
  let result = false;

  for (let value of array) {
    // console.log(`valor a ser comparado: ${value}`);
    let counter = comparateNumber(array, value);
    if (counter >= 3) {
      result = true;
      break;
    }
    counter = 0;
  }
  return result;
}

function isValid(array) {
  let isInvalidLength = isDifferentThan11(array);
  let isInvalidValue = ((!isValidNumber(array)) || (isRepeatedNumber(array)));
  let result = true;

  if (isInvalidLength) {
    result = 'Array com tamanho incorreto.';
  } else if (isInvalidValue) {
    result = 'não é possível gerar um número de telefone com esses valores';
  }

  return result;
}

function maskPhoneNumber(index) {
  let inputMask = '';
  switch (index) {
  case 0:
    inputMask += '(';
    break;
  case 2:
    inputMask += ') ';
    break;
  case 7:
    inputMask += '-';
    break;
  default:
    inputMask += '';
  }

  return inputMask;
}

function generatePhoneNumber(array) {
  let result = '';
  let validInput = isValid(array);

  if (validInput === true) {
    for (let index = 0; index < array.length; index += 1) {
      result += maskPhoneNumber(index);
      result += array[index].toString();
    }
  } else {
    result = validInput;
  }

  return result;
}

// Desafio 12
function measureSumValue(lineA, lineB, lineC) {
  let verificationLineA = (lineA < lineB + lineC);
  let verificationLineB = (lineB < lineC + lineA);
  let verificationLineC = (lineC < lineA + lineB);
  let result = false;

  if (verificationLineA && verificationLineB && verificationLineC) {
    result = true;
  }

  return result;
}

function measureAbsoluteValue(lineA, lineB, lineC) {
  let verificationLineA = (lineA > Math.abs(lineB - lineC));
  let verificationLineB = (lineB > Math.abs(lineC - lineA));
  let verificationLineC = (lineC > Math.abs(lineA - lineB));
  let result = false;

  if (verificationLineA && verificationLineB && verificationLineC) {
    result = true;
  }

  return result;
}

function triangleCheck(lineA, lineB, lineC) {
  let check1 = measureSumValue(lineA, lineB, lineC);
  let check2 = measureAbsoluteValue(lineA, lineB, lineC);
  let isValidTriangule = (check1 && check2);
  let result = false;

  if (isValidTriangule) {
    result = true;
  }

  return result;
}

// Desafio 13
function comparator(character) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    let isNumber = (character === numbers[index].toString());
    if (isNumber) {
      result = parseInt(character, 10);
    }
  }

  return result;
}

function positiveNumberIdentifier(phrase) {
  let storer = 0;

  for (let character of phrase) {
    storer += comparator(character);
  }

  return storer;
}

function hydrate(string) {
  let cupsOfWater = positiveNumberIdentifier(string);
  let result;

  if (cupsOfWater === 1) {
    result = `${cupsOfWater} copo de água`;
  } else {
    result = `${cupsOfWater} copos de água`;
  }

  return result;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
