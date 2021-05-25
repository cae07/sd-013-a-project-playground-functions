// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3 - Ajudado por jackson pires no zoom
function splitSentence(string) {
  let array = string.split(" ");
  return array;  
}

// Desafio 4
function concatName(value) {
  let result = [];
  for (let index = 0; index < value.length; index +=1) {
  }
  result = value[value.length - 1] + ', ' + value[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  let tie = ties * 1;
  let result = win + tie;
  return result;
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
