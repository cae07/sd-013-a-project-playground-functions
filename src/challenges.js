// Desafio 1
function compareTrue(value1, value2) {
  let resultado;

  if (value1 === true && value2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }

  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let trianguleArea = (base * height) / 2;
  return trianguleArea;
}

// Desafio 3
function splitSentence(sentence) {
  let separator = ' ';
  let result = sentence.split(separator);

  return result;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let storer = `${arrayOfStrings[arrayOfStrings.length - 1]}, `;
  storer += arrayOfStrings[0];

  return storer;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties * 1;

  return totalPoints;
}

// Desafio 6
function highestNumber(arrayOfNumbers) {
  let numberHighest = -1;

  // descobrindo primeiramente qual é o maior número deste arrayOfNumbers:
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > numberHighest) {
      numberHighest = arrayOfNumbers[index];
    }
  }

  return numberHighest;
}

function highestCount(arrayOfNumbers) {
  let highestCounter = 0;
  let numberHighest = highestNumber(arrayOfNumbers);

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === numberHighest) {
      highestCounter += 1;
    }
  }
  console.log(`o número ${numberHighest} é o maior número encontrado no array.`);
  console.log(`O número ${numberHighest} se repete ${highestCounter} vezes neste array.`);

  return highestCounter;
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
