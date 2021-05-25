// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let splits = frase.split(' ');
  return splits;
}

// Desafio 4
function concatName(primeiraPalav) {
  let ultimaPalav = '';
  for (let index = 0; index < primeiraPalav.length; index += 1) {
    ultimaPalav = primeiraPalav[index];
  }
  let soma = `${ultimaPalav}, ${primeiraPalav[0]}`;
  return soma;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let somaPoints = pointsWins + pointsTies;
  return somaPoints;
}

// Desafio 6
function highestCount(numbers) {
  let counter = 0;
  let highNumber = numbers[0];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= highNumber) {
      highNumber = numbers[index];
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
