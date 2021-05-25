// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringSentence) {
  let arrayStrings = [];
  arrayStrings = stringSentence.split(" ");
  return arrayStrings;
}

// Desafio 4
function concatName(arrayConc) {
  stringConcat = "";
  stringConcat = arrayConc[arrayConc.length - 1] + ", " + arrayConc[0];
  return stringConcat;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  wins = wins * 3;
  ties = ties * 1;
  points = wins + ties;
  return points;
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
