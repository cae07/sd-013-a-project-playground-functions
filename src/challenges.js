const { rules } = require("eslint-plugin-sonarjs");

// Desafio 1
function compareTrue(x, y) {
  return x === true && y === true;
}

// Desafio 2
function calcArea(base, height) {
  var v = base * height 
  return v / 2
}

// Desafio 3
//Desafio feito com a ajuda do material: https://blog.betrybe.com/javascript/javascript-split/
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(names) {
  let x = names [names.length - 1]
  let y = names[0];
  return `${x}, ${y}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let gamesWins = wins * 3
  let gamesTies = ties * 1 
  return gamesWins + gamesTies
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
