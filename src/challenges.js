// Desafio 1
function compareTrue (value1, value2) {
  if ( value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(51,1));

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let concatItens = lastItem + ", " + firstItem;
  return concatItens;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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
