// Desafio 10
function techList(techs, name) {
  let techsArray = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  techs.sort();
  for (let tech of techs) {
    techsArray.push(
      {
        tech,
        name,
      },
    );
  }
  return techsArray;
}

// LINK https://stackoverflow.com/a/19395302
function coutingNumbers(number) {
  let counts = {};
  number.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  for (let n in counts) {
    if (counts[n] === 3) return false;
  }
  return true;
}

function verifyDigits(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return false;
    }
  }
  return true;
}

// Desafio 11
function generatePhoneNumber(number) {
  let phonenumber = '';

  if (number.length !== 11) return 'Array com tamanho incorreto.';
  if (verifyDigits(number) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (coutingNumbers(number) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  phonenumber += `(${number[0]}${number[1]}) `;
  phonenumber += `${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-`;
  phonenumber += `${number[7]}${number[8]}${number[9]}${number[10]}`;
  return phonenumber;
}

// Desafio 12

function lessThanTheAbsoluteValueOfMeasures(lineA, lineB, lineC) {
  // Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.
  if (lineA < Math.abs(lineB - lineC)) return false;
  if (lineB < Math.abs(lineC - lineA)) return false;
  if (lineC < Math.abs(lineA - lineB)) return false;
  return true;
}

function isGreaterThanTheMeasures(lineA, lineB, lineC) {
  // Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.
  if (lineA > lineB + lineC) return false;
  if (lineB > lineA + lineC) return false;
  if (lineC > lineA + lineB) return false;
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (!isGreaterThanTheMeasures(lineA, lineB, lineC)) {
    return false;
  }

  if (!lessThanTheAbsoluteValueOfMeasures()) {
    return false;
  }
  // Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
  return true;
}

// Desafio 13
function hydrate(string) {
  let howManyIsNecessary = 0;
  let extractedNumbers = string.replace(/\D/g, '').split('');
  for (let i = 0; i < extractedNumbers.length; i += 1) {
    let n = Number(extractedNumbers[i]);
    howManyIsNecessary += n;
  }
  if (howManyIsNecessary === 1) return `${howManyIsNecessary} copo de água`;
  return `${howManyIsNecessary} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
