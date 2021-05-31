// Desafio 1
function compareTrue(acabouPandemia, tenhoDinheiro) {
  let vouViajar;
 
  vouViajar = acabouPandemia === true && tenhoDinheiro === true
 
  return vouViajar;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;

  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(nomeCompleto) {
  let primeiroNome = nomeCompleto[0];
  let ultimoNome = nomeCompleto[nomeCompleto.length - 1];
  return ultimoNome + ", " + primeiroNome;
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
