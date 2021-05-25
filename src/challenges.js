// Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let res = (base * height) / 2;
  return res;
}

// Desafio 3
function splitSentence(string) {
  let res = string.split(' ');
  return res;
}

// Desafio 4
function concatName(nome) {
  let ultimoNome = nome[nome.length - 1];
  let primeiroNome = nome[0];

  let res = `${ultimoNome}, ${primeiroNome}`;

  return res;
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
