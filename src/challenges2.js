// Desafio 10
function techList(list, name) {
  let object = [];
  for (let item of list.sort()) {
    object.push({
      tech: item,
      name,
    });
  }
  if (object.length === 0) {
    object = 'Vazio!';
  }
  return object;
}

// Desafio 11
function generatePhoneNumber(array) {
  let errorSize = 'Array com tamanho incorreto.';
  let errorImpossible = 'não é possível gerar um número de telefone com esses valores';
  let checkRepeat = false;

  for (phoneDigit of array) {
    if (phoneDigit < 0 | phoneDigit > 9 | checkRepeat === true) result = errorImpossible;
    result = phoneNumber;
  }

  if (array.length !== 11) result = errorSize;
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA > Math.abs(lineB) - Math.abs(lineC)
  && lineB > Math.abs(lineA) - Math.abs(lineC)
  && lineC > Math.abs(lineA) - Math.abs(lineB));
}

// Desafio 13
function hydrate(barOrder) {
  let ints = barOrder.match(/\d+/g).map(Number);
  let glassCount = 0;
  for (let index = 0; index < ints.length; index += 1) glassCount += ints[index];
  return glassCount === 1 ? glassCount + ' ' + 'copo de água' : glassCount + ' ' + 'copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
