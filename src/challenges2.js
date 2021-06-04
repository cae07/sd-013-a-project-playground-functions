// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let objt = {};
  let list = [];
  array = array.sort();
  for (let i = 0; i < array.length; i += 1) {
    objt.name = name;
    objt.tech = array[i];
    list.push(objt);
    objt = {};
  }
  return list;
}

// Desafio 11
function auxCountItems(array, keep) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (keep === array[index]) {
      count += 1;
    }
    if (count > 2) {
      return true;
    }
  }
}

function countItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    let keep = array[i];
    if (auxCountItems(array, keep) === true) {
      return true;
    }
  }
}

function testNumbers(array) {
  if (countItems(array) === true) {
    return true;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(array) {
  let phoneNumber = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (testNumbers(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < array.length; i += 1) {
    phoneNumber += array[i];
  }
  phoneNumber = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let text = str;
  let sum = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] % text[i] === 0) {
      sum += parseInt(text[i], 10);
    }
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
