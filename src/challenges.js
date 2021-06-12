// Desafio 1
function compareTrue(booleano1, booleano2){
  return booleano1 && booleano2;
}

compareTrue(true, false);


// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}


// Desafio 3
function splitSentence(string) {
  return string.splitSentence[''];
}


// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ', ' + array[0];
  return concat;
}



// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
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
