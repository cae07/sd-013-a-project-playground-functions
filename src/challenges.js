// Desafio 1
function compareTrue(a, b) {
  let result;
  if (a === true && b === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(a) {
  let result = a.split(' ');
  return result;
}
console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(a) {
  let ultimo = a[a.length - 1];
  let primeiro = a[0];
  let result = (ultimo + ', ' + primeiro);
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result;
  wins *= 3;
  result = wins + ties;
  return result;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
