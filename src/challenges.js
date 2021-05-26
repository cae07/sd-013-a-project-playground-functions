// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  let condition = true;
  if (val1 && val2) {
    condition = true;
  } else {
    condition = false;
  }
  return condition;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let fatia = frase.split(' ');
  return fatia;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let primeiroItem = arrayString[arrayString.length - 1];
  let ultimoItem = arrayString[0];
  let result = primeiroItem + ', ' + ultimoItem;
  return result;
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
