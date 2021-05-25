// Desafio 1: Crie uma função usando o operador &&
function compareTrue(param1, param2) {
  if (param1 && param2 == true) {
    return true;
  } else {
  return false;
  }
}
// console.log(compareTrue(true, true));

// Desafio 2: Crie uma função que calcule a área de um triângulo
function calcArea(base, altura,divisor) {
  let area = (base * altura) / divisor;
  return area;
}
// console.log(calcArea(5, 8, 2));

// Desafio 3: Crie uma função que divida a frase
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
