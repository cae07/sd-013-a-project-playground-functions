// Desafio 1
function compareTrue(object1, object2) {
  if (object1 == true && object2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(texto) {
  return (texto.split(' '));
}

// Desafio 4
function concatName(somaTexto) {
  let textoSomado = somaTexto[somaTexto.length - 1] + ', ' + somaTexto[0];
  return (textoSomado);
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
