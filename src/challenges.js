// Desafio 1
function compareTrue(booleanTypeOne, booleanTypeTwo) {
  if (booleanTypeOne && booleanTypeTwo) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(words) {
  let first = words[0];
  let last = words[words.length - 1];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  for (let indexWins = 0; indexWins < wins; indexWins += 1) {
    points += 3;
  }

  for (let indexTies = 0; indexTies < ties; indexTies += 1) {
    points += 1;
  }

  return points;
}

// Desafio 6

function verifyHigher(numberArrays) {
  let maior = 0;
  for (let index = 0; index < numberArrays.length; index += 1) {
    if (numberArrays[index] > maior) {
      maior = numberArrays[index];
    }
  }
  return maior;
}

function verifyEquals(numberArrays, higher) {
  let qtd = 0;
  for (let index = 0; index < numberArrays.length; index += 1) {
    if (numberArrays[index] === higher) {
      qtd += 1;
    }
  }
  return qtd;
}

function highestCount(numberArrays) {
  let maior = verifyHigher(numberArrays);
  let equals = verifyEquals(numberArrays, maior);
  return equals;
}

// Desafio 7
function catAndMouse() {
}

// Desafio 8
function fizzBuzz() {
}

// Desafio 9
function encode() {
}
function decode() {
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
