// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }else {
    return false;
  }
}
console.log(compareTrue(false,false))
// Desafio 2
function calcArea(base, height) {
  return (base * height) /2
}
let sum = calcArea(10, 50)
let sum2 = calcArea(5, 2)
let sum3 = calcArea(51, 1)

console.log(sum, sum2, sum3)
// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}
console.log(splitSentence("go trybe vamo que vamo foguete"))
// Desafio 4
function concatName(phrase) {
  let concatenacao = phrase[phrase.length -1] + ", " + phrase[0];
  return concatenacao
}
let name = concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
let trybe = concatName(['foguete', 'não', 'tem', 'ré']);
let pirate = concatName(['captain', 'my', 'captain']);
console.log(name, trybe, pirate)
// Desafio 5
function footballPoints(wins, ties) {
  let vitory = 3 * wins;
  let empate = 1 * ties;
  let result = vitory + empate;
  return result
  }
let soma = footballPoints(14, 8)
let soma2 = footballPoints(1, 2)
let soma3 = footballPoints(0, 0)
console.log(soma,soma2,soma3)
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
