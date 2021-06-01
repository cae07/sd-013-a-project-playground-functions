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

function countDups(phoneNumbers, phoneDigit) {
  let counter = 0;

  for (let j = 0; j < phoneNumbers.length; j += 1) {
    if (phoneNumbers[j] === phoneDigit) {
      counter += 1;
    }
  }
  return counter;
}

function checkDups(phoneNumbers) {
  for (let i = 0; i < phoneNumbers.length; i += 1) {
    let reps = countDups(phoneNumbers, phoneNumbers[i]);
    if (reps >= 3) {
      return true;
    }
  }
}

function checkSize(phoneNumbers) {
  return phoneNumbers.length !== 11;
}

function checkGtLt(phoneNumbers) {
  for (let i = 0; i < phoneNumbers.length; i += 1) {
    if (phoneNumbers[i] < 0 || phoneNumbers[i] > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(phoneNumbers) {
  if (!checkSize(phoneNumbers)) {
    if (!checkGtLt(phoneNumbers) && !checkDups(phoneNumbers)) {
      let result = phoneNumbers.join('');
      let area = result.slice(0, 2);
      let exchange = result.slice(2, 7);
      let line = result.slice(7);

      return `(${area}) ${exchange}-${line}`;
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
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
  return glassCount === 1 ? `${glassCount} copo de água` : `${glassCount} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
