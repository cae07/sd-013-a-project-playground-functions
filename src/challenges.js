// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4 A TERMINAR
function concatName(array) {
  for (i=0;i<=array.length; i++) {
    
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  var soma = wins + ties;
  return soma;
}

// Desafio 6
highestCount();
function highestCount(array) {

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
