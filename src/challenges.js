// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(goTrybe) {
  return goTrybe.split(' ');
}
// Desafio 4
function concatName(stringArrays) {
  return `${stringArrays[stringArrays.length - 1]}, ${stringArrays[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let contador = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > highestNumber) {
      highestNumber = numberArray[index];
      contador = 1;
    } else if (numberArray[index] === highestNumber) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);
  if (gato1 > gato2) {
    return 'cat2';
  } if (gato2 > gato1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(numeroArray) {
  let resultado = [];
  for (let dividendo of numeroArray) {
    if ((dividendo % 3 === 0) && (dividendo % 5 != 0)) {
      resultado.push('fizz');
    } else if ((dividendo % 3 != 0) && (dividendo % 5 === 0)) {
      resultado.push('buzz');
    } else if ((dividendo % 3 === 0) && (dividendo % 5 === 0)) {
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
// Desafio 9
function encode(stringEncode) {
  let change = '';

  for (let checkLetters of stringEncode) {
    if (checkLetters === 'a') {
      change += '1';
    } else if (checkLetters === 'e') {
      change += '2';
    } else if (checkLetters === 'i') {
      change += '3';
    } else if (checkLetters === 'o') {
      change += '4';
    } else if (checkLetters === 'u') {
      change += '5';
    } else {
      change += checkLetters;
    }
  }
  return change;
}
function decode(stringDecode) {
  let change2 = '';

  for (let checkLetters2 of stringDecode) {
    if (checkLetters2 === '1') {
      change2 += 'a';
    } else if (checkLetters2 === '2') {
      change2 += 'e';
    } else if (checkLetters2 === '3') {
      change2 += 'i';
    } else if (checkLetters2 === '4') {
      change2 += 'o';
    } else if (checkLetters2 === '5') {
      change2 += 'u';
    } else {
      change2 += checkLetters2;
    }
  }
  return change2;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
