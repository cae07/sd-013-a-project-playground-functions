// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  let meuArray = string.split(' ');

  return meuArray;
}

// Desafio 4
function concatName(array) {
  let result = `${array[array.length - 1]}, ${array[0]}`;

  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let result = winPoints + ties;

  return result;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let contagem = 0;

  for (let index of array) {
    if (index > maiorNumero) {
      maiorNumero = index;
      contagem = 0;
    }
    if (index === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
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
