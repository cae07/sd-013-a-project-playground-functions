// Desafio 1
function compareTrue(Param1, Param2) {
  if( Param1 == true && Param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(stringASplitar) {
  return stringASplitar.split(" ")
}

// Desafio 4
function concatName(arrayAInformar) {
  let primeiroItem = arrayAInformar[0];
  let ultimoItem = arrayAInformar[arrayAInformar.length-1]
  return (ultimoItem + ", " + primeiroItem)
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
