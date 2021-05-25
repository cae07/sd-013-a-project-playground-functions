// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let techsSorted = techs.sort();
  let objects = [];
  for (let index = 0; index < techsSorted.length; index += 1) {
    objects.push({
      tech: techsSorted[index],
      name,
    });
  }
  return objects;
}

// Desafio 11
function checkRepeatAux(array, number) {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (number === array[index]) {
      repeat += 1;
    }
  }
  return repeat;
}
function checkRepeat(array) {
  for (let index = 0; index < array.length; index += 1) {
    let repeat = checkRepeatAux(array, array[index]);
    if (repeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return array;
}
function checkArray(array) {
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] > 9) || (array[index] < 0)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return checkRepeat(array);
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let check = checkArray(array);
  if (typeof check === 'string') {
    return check;
  }
  let phoneNumber = `(${array[0]}${array[1]}) `;
  phoneNumber += `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  phoneNumber += `-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return phoneNumber;
}

// Desafio 12
function checkSide2(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  if (lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  if (lineC < Math.abs(lineB - lineA)) {
    return false;
  }
  return true;
}
function checkSide(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC)) {
    return false;
  }
  if (lineB > (lineA + lineC)) {
    return false;
  }
  if (lineC > (lineB + lineA)) {
    return false;
  }
  return checkSide2(lineA, lineB, lineC);
}
function triangleCheck(lineA, lineB, lineC) {
  return checkSide(lineA, lineB, lineC);
}

// Desafio 13
function hydrate(string) {
  let array = string.match(/\d+/g);
  let qtdAgua = 0;
  for (let index = 0; index < array.length; index += 1) {
    let number = parseInt(array[index], 10);
    qtdAgua += number;
  }
  if (qtdAgua === 1) {
    return '1 copo de água';
  }
  return `${qtdAgua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
