// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 === true && v2 === true) {
    return true;
  } r
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let ultimoNome = nomes[nomes.lenght - 1];
  let primeiroNome = nome[0];
  let concat = (`${ultimoNome}, ${primeiroNome}`); 
  return concat;
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
