// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}
console.log(calcArea(50, 3));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('O bicho tá pegando"'));

// Desafio 4
function concatName(nome) {
let resultado = `${nome[nome.length - 1]}, ${nome[0]}`;
//let resultado = nome[nome.length -1] + ' ,' + nome[0];
  return resultado;
}
console.log(concatName(['Fulano', 'Beltrano', 'Cicrano', 'De tal']));

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));

}
console.log(footballPoints(5, 2));

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
