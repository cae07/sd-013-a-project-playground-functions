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
function footballPoints() {
}

// Desafio 6
function highestCount() {
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
