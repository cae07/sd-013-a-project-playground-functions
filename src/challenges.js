// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(goTrybe) {
  return goTrybe.split(' ')
  
}

// Desafio 4
function concatName(stringArrays) {
  return `${stringArrays[stringArrays.length-1]}, ${stringArrays[0]}`
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties
}

// Desafio 6
function highestCount(numberArray) {

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
